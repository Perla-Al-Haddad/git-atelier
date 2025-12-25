<script lang="ts">
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import hljs from 'highlight.js';
import { defineComponent, onBeforeMount, ref } from 'vue';
import { useRoute } from "vue-router";

import HierarchyList from "../components/HierarchyList.vue";
import { type IHierarchyNode } from "../types/IHierarchyNode";
import { Scroller } from "../utils/Scroller";

import categoriesPosts from "../data/db.json";

interface IPost {
    index: string,
    title: string,
    tags: Array<string>,
    dateCreated?: Date
}

const generateHeadingID = (s: string) => {
    return encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-').replace(/`/g, "").replace(/\./g, ''));
}

const fetchPostList = () => {
    let results: Array<IPost> = [];

    for (const category in categoriesPosts) {
        if (!Object.prototype.hasOwnProperty.call(categoriesPosts, category)) {
            continue;
        }
        const posts: Array<IPost> = (categoriesPosts as any)[category];
        posts.forEach((post) => {
            results.push(post);
        })
    }

    return results;
}

const postList = fetchPostList();

const fetchPostFile = async (fileName: String) => {
    const response = await fetch(`/git-atelier/posts/${fileName}.md`);
    const markdownText = await response.text();

    return markdownText;
}

const convertMarkdownToHTML = (markdownText: string) => {
    const md = new MarkdownIt();
    md.use(MarkdownItAnchor, {
        slugify: (s) => generateHeadingID(s)
    });

    const results = md.render(markdownText)

    return results;
}

const extractPostHierarchy = (markdownText: string): IHierarchyNode[] => {
    const lines = markdownText.split('\n');
    const hierarchy: IHierarchyNode[] = [];
    let stack: IHierarchyNode[] = [];

    for (const line of lines) {
        const match = line.match(/^(#+)\s+(.*)/);

        if (!match) {
            continue;
        }

        const [, hashes, text] = match;
        const level = hashes.length - 1;

        const newNode: IHierarchyNode = { text, children: [], level: level, id: generateHeadingID(text) };

        if (level === 1) {
            // Main title
            hierarchy.push(newNode);
            stack = [newNode];
        } else if (level > 1) {
            // Subtitle
            const parentLevel = level - 1;
            while (stack.length > parentLevel) {
                stack.pop();
            }
            stack[stack.length - 1].children.push(newNode);
            stack.push(newNode);
        }
    }

    return hierarchy;
};


const fetchPostMetadata = (index: String): IPost => {
    const postMetadata: IPost = postList.filter((el) => el.index == index)[0];

    if (postMetadata.dateCreated) {
        postMetadata.dateCreated = new Date(postMetadata.dateCreated);
    }

    return postMetadata;
}


export default defineComponent({
    setup(this) {
        const route = useRoute();
        let postIndex = ref<string>(route.params.index as string);
        let postHTML = ref<string>("");
        let postMetadata = ref<IPost>();
        let postHierarchy = ref<IHierarchyNode[]>();

        onBeforeMount(async () => {
            const postFile = await fetchPostFile(postIndex.value);

            postMetadata.value = fetchPostMetadata(postIndex.value);
            postHTML.value = convertMarkdownToHTML(postFile);
            postHierarchy.value = extractPostHierarchy(postFile);
        });

        return {
            postIndex,
            postHTML,
            postMetadata,
            postHierarchy
        }
    },

    data() {
        return {
            postMetadata: null as unknown as IPost,
            index: '',
            postHTML: '',
            categoriesPosts: categoriesPosts,
            postHierarchy: null as unknown as IHierarchyNode[]
        }
    },

    async beforeRouteUpdate(to, _) {
        const postIndex = to.params.index as string;

        const postFile = await fetchPostFile(postIndex);

        const postMetadata = fetchPostMetadata(postIndex);
        const postHTML = convertMarkdownToHTML(postFile);
        const postHierarchy = extractPostHierarchy(postFile);

        this.postMetadata = postMetadata;
        this.postHTML = postHTML;
        this.postIndex = postIndex;
        this.postHierarchy = postHierarchy;
    },

    updated() {
        hljs.highlightAll();
        Scroller.init();
    },

    props: {
        hierarchy: Array,
    },

    components: {
        HierarchyList
    },

});
</script>

<template>
    <main>
        <div class="container my-5">
            <div class="row">
                <div class="col col-md-2 mb-5 sticky-col navigation-container">
                    <h6 class="fs-8 mt-3 text-bold text-uppercase">
                        Navigation
                    </h6>
                    <hr>
                    <ul class="navbar-nav list-unstyled">
                        <li v-for="(posts, category) in categoriesPosts" class="nav-item">
                            <h6 class="fs-8 text-bold text-gray">
                                {{ category }}
                            </h6>
                            <ul>
                                <li v-for="post in posts" class="nav-item">
                                    <RouterLink :to="`/${post.index}`"
                                        :class="`nav-link text-gray-light ${(postIndex == post.index) ? 'active' : ''}`">{{
                                            post.title }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div v-if="postMetadata" class="col col-md-8 px-md-6">
                    <h1 class="text-bold" id="test">{{ postMetadata.title }}</h1>
                    <p class="fs-8 text-gray-light text-end" v-if="postMetadata.dateCreated">{{
                        postMetadata.dateCreated.toLocaleDateString() }}</p>
                    <ul class="list-unstyled d-flex gap-2 align-items-center">
                        <li class="fs-8 tag" v-if="postMetadata.tags" v-for="tag in postMetadata.tags">#{{ tag }}</li>
                    </ul>
                    <hr class="mb-5">
                    <section class="post-container" v-html="postHTML"></section>
                </div>

                <div id="TableOfContents" class="col col-md-2 sticky-col navigation-container">
                    <h6 class="fs-8 mt-3 text-bold text-uppercase">
                        Table of contents
                    </h6>
                    <hr>
                    <HierarchyList :level=1 :hierarchy="postHierarchy" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

.navigation-container {
    height: calc(100vh);
    overflow-y: auto;
}

.tag {
    background-color: var(--bl-dark-soft);
    padding: 3px 7px;
    border-radius: 15px;
    color: var(--bl-blue);
}

@media (min-width: 768px) {
    .sticky-col {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
}
</style>