export class Router {

    constructor() {
        this.routes = ['main_page', 'create_page', 'edit_page'];
        this.default = 'main_page';
        this.currentActive = '';
    }

    get currentActiveRoute() {
        return this.currentActive;
    }

    setRoute(page) {
        this.currentActive = page;
    }

    init() {
        document.querySelectorAll('[data-route]').forEach(element => {
            if( ! element.classList.contains('disabled'))
            {
                element.classList.add('disabled');
            }
        });

        this.setRoute(this.default);
        this.processLocate();
    }

    processLocate() {
        let filteredRoutes = this.routes.filter(route => route !== this.currentActiveRoute);
        let currentPage = document.querySelector('[data-route="' + this.currentActiveRoute + '"]');
        filteredRoutes.map(route => {
            let selector = '[data-route="' + route + '"]';
            let page = document.querySelector(selector);

            if( ! page.classList.contains('disabled'))
            {
                page.classList.add('disabled');
            }
        });

        if(currentPage.classList.contains('disabled'))
        {
            currentPage.classList.remove('disabled');
        }
    }

    locate(page) {

        if( ! page)
        {
            this.setRoute(this.default);
            this.processLocate();
            return;
        }

        if( ! this.routes.includes(page))
        {
            console.error('Wrong route', page);
            this.setRoute(this.default);
            this.processLocate();
            return;
        }

        this.setRoute(page);
        this.processLocate();
    }

}