class StaticRouteRegistry {
    routes: any = {};

    clear() {
        this.routes = {};
    }

    has(pathname: string) {
        return pathname in this.routes;
    }

    add(pathname: string, viewData: any) {
        if (this.has(pathname)) {
            throw new Error('The pathname "' + pathname + '" has already been used for another route');
        }

        this.routes[pathname] = viewData;
    }

    get(pathname: string) {
        if (this.has(pathname)) {
            return this.routes[pathname];
        }

        throw new Error('There is no static route for the pathname "' + pathname + '" registered');
    }
}

export default new StaticRouteRegistry();
