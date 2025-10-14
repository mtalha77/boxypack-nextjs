import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    // Validate Cloudinary configuration
    if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
      return NextResponse.json(
        { success: false, error: 'Configuration error' },
        { status: 500 }
      );
    }
    if (!process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Configuration error' },
        { status: 500 }
      );
    }
    if (!process.env.CLOUDINARY_API_SECRET) {
      return NextResponse.json(
        { success: false, error: 'Configuration error' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { success: false, error: 'File size exceeds 10MB limit' },
        { status: 400 }
      );
    }

    // Determine resource type based on file type
    const isImage = file.type.startsWith('image/');
    const resourceType = isImage ? 'image' : 'raw';

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = `data:${file.type};base64,${buffer.toString('base64')}`;

    // Upload to Cloudinary with correct resource type
    const result = await cloudinary.uploader.upload(base64File, {
      folder: 'boxypack/design-files',
      resource_type: resourceType as 'image' | 'raw',
      public_id: `${Date.now()}-${file.name.replace(/\.[^/.]+$/, '')}`,
    });

    return NextResponse.json({
      success: true,
      data: {
        url: result.secure_url,
        publicId: result.public_id,
        originalFilename: file.name,
        format: result.format,
        size: result.bytes,
        resourceType: result.resource_type,
        fileType: file.type,
      },
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to upload file. Please try again.'
      },
      { status: 500 }
    );
  }
}

