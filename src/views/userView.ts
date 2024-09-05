export class UserView {
    public render(user: any): any {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    }

    public renderMany(users: any[]): any[] {
        return users.map(this.render);
    }
}
