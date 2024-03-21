import { Client, Account } from "appwrite";
import conf from '../conf/conf'
// ? Improvised code 
// create a class
export class AuthService {
    // properties
    client = new Client(); // creating an client
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        // adding the account value
        // creating an account
        this.account = new Account(this.client);
    }

    // ? Creating methods
    // 1. Creating an account
    // SIGN-UP
    // inside this we call the appwrite services like a wrapper
    async createAccount({ email, password, name }) {
        try {
            // await for account creation
            const userAccount = await this.account.create(ID.unique(), email, password, name); 
            
            // call another method
            // if userAccount exists => Login
            // here also we have access to email and password
            // call login method
            {userAccount ? (
                this.login({ email, password})
            ) : 
                userAccount
            }
        } catch (error) {
            throw error;            
        }  
    }

    // 2. Creating an login method
    // SIGN-IN
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    // 3. Logout
    async logout() {
        try {
            // delete all the sessions
           return await this.account.deleteSessions();
        } catch (error) {
            // throw error;
            console.log('Appwrite service:: logout :: error', error);
        }
    }

    // 4. getCurrentUser
    // To check if current user is already logged in or not when on HOME page
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // throw error;
            console.log('Appwrite service:: getCurrentUser:: error', error);
        }
        
        // if current user is does not exist then return null
        return null;
    }

}

// creating an objcet as this reduce of creating an object for accessing the class 
const authService = new AuthService();

export default authService


// we can do like this but the problem is that
// ? The reason behind creating a service is: this will expose our account.create when we create register 

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// // Go to OAuth provider login page
// account.createOAuth2Session(OAuthProvider.GitHub, '[LINK_ON_SUCCESS]', '[LINK_ON_FAILURE]');
