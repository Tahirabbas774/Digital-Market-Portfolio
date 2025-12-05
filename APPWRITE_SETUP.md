# Appwrite Contact Form Setup

This documentation explains how to set up Appwrite database for the contact form functionality.

## Prerequisites

1. An Appwrite project (either on [Appwrite Cloud](https://cloud.appwrite.io) or self-hosted)
2. Environment variables configured

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_STORAGE_ID=your-storage-bucket-id
VITE_APPWRITE_CONTACT_COLLECTION_ID=your-contact-collection-id
```

## Database Setup

### 1. Create a Database

1. Go to your Appwrite Console
2. Navigate to "Databases"
3. Click "Create Database"
4. Name it (e.g., "main" or "portfolio")
5. Copy the Database ID and add it to your `.env` file

### 2. Create Contact Collection

1. Inside your database, click "Create Collection"
2. Name it "contact_inquiries" or similar
3. Copy the Collection ID and add it to your `.env` file as `VITE_APPWRITE_CONTACT_COLLECTION_ID`

### 3. Configure Collection Attributes

Add the following attributes to your contact collection:

| Attribute Name | Type   | Size | Required | Default |
|---------------|--------|------|----------|---------|
| name          | String | 255  | Yes      | -       |
| email         | String | 255  | Yes      | -       |
| company       | String | 255  | No       | -       |
| message       | Text   | -    | Yes      | -       |
| createdAt     | String | 255  | Yes      | -       |
| status        | String | 50   | Yes      | "new"   |

### 4. Set Permissions

Configure the collection permissions:

- **Create**: Allow "Any" or "Users" (depending on your authentication setup)
- **Read**: Allow "Admin" only (for privacy)
- **Update**: Allow "Admin" only
- **Delete**: Allow "Admin" only

## Storage Setup (Optional)

If you plan to handle file uploads in the future:

1. Navigate to "Storage" in your Appwrite Console
2. Create a new bucket for contact attachments
3. Copy the Bucket ID and add it to your `.env` file as `VITE_APPWRITE_STORAGE_ID`

## Usage

The contact forms in both `ContactPage.tsx` and `contact.tsx` components are now connected to Appwrite. When users submit the contact form:

1. Form data is validated
2. A new document is created in the contact collection
3. Success/error messages are displayed to the user
4. Form is reset on successful submission

## Data Structure

Each contact submission creates a document with this structure:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp", // Optional
  "message": "Hello, I'm interested in your services...",
  "createdAt": "2025-12-05T10:30:00.000Z",
  "status": "new"
}
```

## Viewing Contact Submissions

To view contact submissions, you can:

1. Use the Appwrite Console to browse documents
2. Create an admin interface using the `getContactDocuments()` function
3. Set up webhooks to notify you of new submissions

## Security Notes

- Environment variables starting with `VITE_` are exposed to the client
- Never put sensitive keys in client-side environment variables
- Consider implementing rate limiting for contact form submissions
- Review and adjust collection permissions based on your security requirements

## Troubleshooting

1. **"Appwrite is not properly configured" error**: Check that all environment variables are set correctly
2. **Permission denied errors**: Review collection permissions in Appwrite Console
3. **Network errors**: Verify your Appwrite endpoint and project ID
4. **TypeScript errors**: Ensure `@types/react` and `@types/react-dom` are installed