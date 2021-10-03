import jwtDecode from 'jwt-decode';
import { IUser } from '../types/user';
class AuthService {
    private _accessToken: string | null = null;

    public getToken(): string | null {
        let token: string | null =
            this._accessToken || localStorage.getItem('token');

        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                if ((decodedToken as any).exp * 1000 > Date.now()) {
                    return token;
                }
            } catch (e) {
                console.error(e);
                return null;
            }
        }
        return null;
    }
    public isAuthenticated(): boolean {
        return !!this.getToken();
    }
    private setToken(token: string): void {
        this._accessToken = token;
        localStorage.setItem('token', token);
    }
    public async loginUser(
        email: string,
        password: string
    ): Promise<IUser | Error> {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {
            email: 'email@email.ru',
        };
    }
    public async signUpUser(email: string, password: string): Promise<IUser> {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {
            email: 'email@email.ru',
        };
    }
    public async getUserData(): Promise<IUser | Error> {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {
            email: 'email@email.ru',
        };
    }
    public logout(): void {
        localStorage.removeItem('token');
        this._accessToken = null;
    }
}

export const authService = new AuthService();
