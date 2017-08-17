export class ServiceError extends Error {
    public data: any = null;

    constructor(type: string, data: any = {}) {
        super(type);
        this.data = data;
    }
}