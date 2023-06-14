/**
 * Represents a user object.
 * @interface
 */
interface IUser {
    id: number;
    name: string;
    email?: string;
    age?: number;
}

/**
 * Checks if an object is of type IUser.
 * @param {any} obj - The object to check.
 * @returns {boolean} - True if the object is of type IUser, false otherwise.
 */
function isIUser(obj: any): obj is IUser {
    return 'id' in obj && 'name' in obj;
}

