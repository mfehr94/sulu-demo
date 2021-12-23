class ViewRegistry {
    views: any = {};

    clear() {
        this.views = {};
    }

    has(type: string, template: string) {
        if (type in this.views) {
            if (template in this.views[type]) {
                return true;
            }
        }
        return false;
    }

    add(type: string, template: string, view: any) {
        if (this.has(type, template)) {
            throw new Error(
                'The type "' + type + '" and template "' + template + '" has already been used for another view'
            );
        }

        this.views[type] = this.views[type] || {};
        this.views[type][template] = view;
    }

    get(type: string, template: string) {
        if (!this.has(type, template)) {
            throw new Error('There is no view for the type "' + type + '" and template "' + template + '" registered');
        }

        return this.views[type][template];
    }
}

export default new ViewRegistry();
