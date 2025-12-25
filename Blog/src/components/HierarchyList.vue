<script lang="ts">
import { type IHierarchyNode } from "../types/IHierarchyNode";

export default {
    props: {
        hierarchy: Array<IHierarchyNode>,
        level: Number
    },
};
</script>

<template>
    <ul :class="[level == 1 ? 'navbar-nav' : '']">
        <li v-for="(node, index) in hierarchy" :key="node.text" class="nav-item">
            <a :href="'#' + node.id" :class="['nav-link', 'text-gray-light', [level == 1 && index == 0 ? 'text-active' : '']]">{{ node.text }}</a>
            <HierarchyList :hierarchy="node.children" v-if="node.children.length > 0" />
        </li>
    </ul>
</template>

<style scoped>
.no-bullet {
    list-style: none;
}
</style>
  