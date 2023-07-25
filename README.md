# cloudinary TinyMCE Plugin

Welcome stranger! This is a repo containing the cloudinary TinyMCE plugin.

### Getting Started

- Please update cloudinary configuration in `src/main/ts/Plugin.ts`

- Place below `json` inside Rich text editor `interface` section

```json
{
  "toolbar": "cloudinary h1 h2 h3 fontselect forecolor backcolor strikethrough bold italic",
  "external_plugins": {
    "cloudinary": "path of cloudinary js file"
  }
}
```

### Response from cloudinary after selecting Asset

https://cloudinary.com/documentation/media_library_widget

```json
{
  "public_id": "sample",
  "resource_type": "image",
  "type": "upload",
  "format": "jpg",
  "version": 1511474034,
  "url": "http://res.cloudinary.com/demo/image/upload/v1511474034/sample.jpg",
  "secure_url": "https://res.cloudinary.com/demo/image/upload/v1511474034/sample.jpg",
  "width": 864,
  "height": 576,
  "bytes": 120257,
  "duration": null,
  "tags": [],
  "metadata": [],
  "created_at": "2023-02-08T08:38:51Z",
  "derived": [
    {
      "url": "http://res.cloudinary.com/demo/image/upload/c_scale,e_grayscale,f_auto,q_auto,w_100/v1511474034/sample.jpg",
      "secure_url": "https://res.cloudinary.com/demo/image/upload/c_scale,e_grayscale,f_auto,q_auto,w_100/v1511474034/sample.jpg"
    }
  ],
  "access_mode": "public",
  "access_control": [],
  "created_by": {
    "type": "user",
    "id": "abc123def456ghiabc123def456ghi"
  },
  "uploaded_by": {
    "type": "user",
    "id": "xyz789efg456qrsxyz789efg456qrs"
  }
```
