import loglevel from 'loglevel';
import requester from '@/services/requester';

class ViewDataStore {
    data = null;
    loading = false;

    loadData = (pathname: string) => {
        this.loading = true;

        return requester
            .get(pathname + '.json', {})
            .then((data) => {
                this.setData(data);
            })
            .catch((error) => {
                loglevel.warn('Error while loading view data for pathname "' + pathname + '".', error);
                this.loading = false;

                throw error;
            });
    };

    setData = (data) => {
        if (!data || !data.type || !data.template) {
            throw new Error('View data must contain at least a "type" property and a "template" property');
        }

        this.loading = false;
        this.data = data;
    };

    get type() {
        return this.data ? this.data.type : null;
    }

    get template() {
        return this.data ? this.data.template : null;
    }
}

export default new ViewDataStore();
