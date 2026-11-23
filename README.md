# Bing Images API by CognifyAPI - Implementation Guide

This repository provides a quick-start guide and documentation for implementing the **Bing Images Search API** via [Cognify API](https://cognifyapi.com). This API allows developers to programmatically fetch high-quality image results from Bing's search index.
A high-performance Bing Images API.

#### Free trial. No credit card required.

[![Start Now](https://img.shields.io/badge/Start%20Now-🚀-blue?style=for-the-badge&logo=google-cloud)](https://cognifyapi.com/bing-images?utm_source=github&utm_medium=repo&utm_campaign=bing_images_api&utm_content=cta)

---

## 🔗 Official Resources
- **API Documentation:** [Bing Images API Docs](https://cognifyapi.com/docs/bing-images-docs)
- **More Info:** [Bing Images API](https://cognifyapi.com/bing-images)
- **Official Website:** [CognifyAPI.com](https://cognifyapi.com/)
- **CognifyAPI Studio:** [Get an API key](https://studio.cognifyapi.com/)

## 🛠 Features
- Search Bing Images with a query.
- Include image dimensions, file type, and MIME type.
- Receive results as structured JSON.

## 📊 Endpoint

| Endpoint | Description | Example parameters | Response example |
| --- | --- | --- | --- |
| `/bing-images` | Search Bing Images and include image metadata. | `query=microsoft&count=1&imageInfo=true` | [JSON sample](./responses/bing-images-search.json) |

## 🚀 Getting Started

Base URL: `https://api.cognifyapi.com`

Send your API key in the `x-cognifyapi-key` header. Install Axios with `npm install axios`, set `COGNIFY_API_KEY`, then run [`index.js`](./index.js).

```text
x-cognifyapi-key: YOUR_COGNIFY_API_KEY
```

### Response Preview

```json
{
  "status": "success",
  "query": "microsoft",
  "results": 1,
  "images": [
    {
      "url": "https://blockonomi.com/wp-content/uploads/2026/07/Microsoft-1-scaled-3.webp",
      "width": 2560,
      "height": 1702,
      "type": "webp",
      "mime": "image/webp"
    }
  ]
}
```
