import { Client, Databases, ID, Query, Storage} from 'appwrite'
import conf from '../conf/conf';
class DatabaseService{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setEndpoint(conf.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

// ? Services -------------------------------- ? // 

    // Post services 
    
    // 1. Create Post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug, // we consider slug as documentID or id.unique() in place of slug
                // what else info we need to update, pass it down here
                {
                    title,
                    content, 
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log('Appwrite databaseService :: createPost :: ERROR!', error);
        }
    }

    // 2. Update Post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            ) 
        } catch (error) {
            console.log('Appwrite databaseService :: updatePost :: ERROR!', error);
        }
    }

    // 3. Delete Post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )
            // this will be handled in frontend if true then delete or false then not 
            return true; //i.e, post is deleted
        } catch (error) {
            console.log('Appwrite databaseService :: deletePost :: ERROR!', error);
            return false; 
        }
    }

    // 4. Get A Single Post
    // what if we need only a single post  
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )
        } catch (error) {
            console.log('Appwrite databaseService :: singlePost :: ERROR!', error);
            return false
        }
    }

    // 5. Get list of posts
    // BUT, we don't want to all the documents as if we take all the docs then those
    // docs will also come whose status is not active
    // we need those values whose status is active using: query

    // status: keys => Queries
    // we need to create indexes then only we can use those queries
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            console.log("Database ID:", conf.appwriteDatabaseID);
            console.log("Collection ID:", conf.appwriteCollectionID);
            console.log("Queries:", queries);

            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
                // 100 //for pagination
            )

            console.log('response:', response);
            return response;
        } catch (error) {
            console.log('Appwrite databaseService :: multiplePosts :: ERROR!', error);
            return false;
        }
    }

    // File upload services

    // Upload File
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                // when uploading a file we need to pass the actual file not the name of the file
                file
            )
        } catch (error) {
            console.log('Appwrite databaseService :: uploadFile :: ERROR!', error);
            return false;
        }
    }

    // 2. Delete File
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
            return true;
        } catch (error) {
            console.log('Appwrite databaseService :: deleteFile :: ERROR!', error);
            return false
        }
    }

    // 3. Get File Preview
    // this getFilePreview doesn't return any promise
    getFilePriview(fileId) {
            return this.bucket.getFilePriview(
                conf.appwriteBucketID,
                fileId
            )
    }
}

export const databaseService = new DatabaseService(); 

export default databaseService
