import { Client, Account, Databases, Storage } from 'appwrite';

// Appwrite configuration
export const appwriteConfig = {
    endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1',
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || '',
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || '',
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID || '',
    contactCollectionId: import.meta.env.VITE_APPWRITE_CONTACT_COLLECTION_ID || '',
};

// Initialize Appwrite client
const client = new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Export client for any additional configuration
export { client };

// Helper function to check if Appwrite is configured
export const isAppwriteConfigured = (): boolean => {
    return !!(
        appwriteConfig.projectId &&
        appwriteConfig.databaseId &&
        appwriteConfig.storageId &&
        appwriteConfig.contactCollectionId
    );
};

// Error handling utility
export const handleAppwriteError = (error: any): string => {
    if (error?.message) {
        return error.message;
    }
    if (typeof error === 'string') {
        return error;
    }
    return 'An unexpected error occurred';
};

// Contact form data interface
export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    message: string;
}

// Create a contact document in Appwrite
export const createContactDocument = async (contactData: ContactFormData) => {
    try {
        if (!isAppwriteConfigured()) {
            throw new Error('Appwrite is not properly configured. Please check your environment variables.');
        }

        const document = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.contactCollectionId,
            'unique()', // Let Appwrite generate a unique ID
            {
                name: contactData.name,
                email: contactData.email,
                company: contactData.company || '',
                message: contactData.message,
                createdAt: new Date().toISOString()
            }
        );

        return {
            success: true,
            document,
            message: 'Contact form submitted successfully!'
        };
    } catch (error) {
        console.error('Error creating contact document:', error);
        return {
            success: false,
            error: handleAppwriteError(error),
            message: 'Failed to submit contact form. Please try again.'
        };
    }
};

// Get all contact documents (for admin use)
export const getContactDocuments = async (limit: number = 50) => {
    try {
        if (!isAppwriteConfigured()) {
            throw new Error('Appwrite is not properly configured.');
        }

        const response = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.contactCollectionId,
            [
                // Add any queries here if needed
                // For example: Query.orderDesc('createdAt')
            ]
        );

        return {
            success: true,
            documents: response.documents,
            total: response.total
        };
    } catch (error) {
        console.error('Error fetching contact documents:', error);
        return {
            success: false,
            error: handleAppwriteError(error),
            documents: [],
            total: 0
        };
    }
};
