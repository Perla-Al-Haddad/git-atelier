export class Scroller {
    private static tocLinks: NodeListOf<HTMLAnchorElement>;
    private static headers: Element[];
    private static ticking = false;
    private static activeHeader: Element | null = null;

    static init() {
        if (document.querySelector('#TableOfContents')) {
            this.tocLinks = document.querySelectorAll('#TableOfContents a');
            this.tocLinks.forEach(link =>
                link.classList.add('transition', 'duration-200')
            );

            this.headers = Array.from(this.tocLinks).map(link => {
                const targetId = link.href.split('#')[1];
                const element = document.querySelector(`#${targetId}`) as Element
                return element;
            });

            window.addEventListener('scroll', () => {
                this.onScroll();
            });
        }
    }

    private static onScroll() {
        if (!this.ticking) {
            requestAnimationFrame(this.update.bind(this));
            this.ticking = true;
        }
    }

    private static update() {
        this.activeHeader ||= this.headers[0];
        let activeIndex = this.headers.findIndex(header => {
            return (
                (header as HTMLElement).getBoundingClientRect().top > 180
            );
        });

        if (activeIndex == -1) {
            activeIndex = this.headers.length - 1;
        } else if (activeIndex > 0) {
            activeIndex--;
        }

        let active = this.headers[activeIndex];

        if (active !== this.activeHeader) {
            this.activeHeader = active;
            this.tocLinks.forEach(link => link.classList.remove('text-active'));
            this.tocLinks[activeIndex].classList.add('text-active');
        }

        this.ticking = false;
    }
}