## Introduction
Ankia-Theme is a blog theme based on the sharing feature of [Trilium](https://github.com/zadam/trilium), which can help you create a basic and aesthetically pleasing blog website.

中文使用指南：[点我跳转](https://www.ankia.top/3LdIi2f30Pan)

## Features of this theme

Compared to the built-in sharing feature of Trilium, this theme has the following features:

- Complete blogging system
- Clean and elegant blog interface
- Optimized reading experience for the main content
- Added table of contents for the main content
- Support for one-click publishing of blog posts
- Support for code highlighting

## Installation

To import the theme into Trilium, follow these steps:

1. Right-click below the note where you want to store your blog.
2. Select "Import into note".
3. In the pop-up window, select the zip package downloaded in step one and uncheck "Safe import" under the "Options" section.
4. Click "Import".

If the import is successful, the notes with the following directory structure will appear in your notes:

```text-plain
- My Blog
    - Timeline
    - Friends' Links
    - About
    - Unpublished
    - Ankia-Theme
```

> Note: These notes form the basic structure of a blog. Please do not delete them.

## Configuration

### Basic Configuration

All configurations for the blog are stored as Trilium attributes. Modify the values of the following attributes in the "My Blog" note to configure your blog:

*   `#siteName = xxx` - The name of your blog, which will be displayed in browser tabs and navigation bars.
*   `#bloggerName = xxx` - The nickname of the blogger, which will be displayed in the blogger information on the right side.
*   `#blogStartTime = xxx` - The start time of your blog, which will be displayed as the running time in the footer.
*   `#motto = xxx` - A motto or quote that will be displayed in the blogger information on the right side.

### Changing Blog Avatar

Replace the "Blogger Avatar" image under "My Blog → Ankia-Theme → imgs" with your own avatar.

> Note: When replacing, please select "Upload new revision" and do not modify any titles or attributes. The same applies to other image configurations mentioned below.

### Changing Blog Logo

Replace the "Blog Logo" image under "My Blog → Ankia-Theme → imgs" with your own logo.

### Social Information

This theme supports displaying several social information, which are disabled by default. Fill in the corresponding attributes and homepage links to automatically enable them:

*   `#githubLink = xxx` - GitHub
*   `#mailLink = xxx` - Email
*   `#zhihuLink = xxx` - Zhihu (a Chinese Q&A platform)
*   `#sspai = xxx` - Sspai (a Chinese tech media platform)
*   `#doubanLink = xxx` - Douban (a Chinese social networking service)
*   `#netEaseCloudLink = xxx` - NetEase Cloud Music (a Chinese music streaming service)
*   `#bilibiliLink = xxx` - Bilibili (a Chinese video sharing website)

### Enabling Comments (Optional)

This theme uses the Twikoo commenting system by default. Before configuring it, you need to deploy Twikoo. Refer to the [Twikoo documentation](https://twikoo.js.org/quick-start.html) for deployment instructions. After deployment, add the following attributes:

*   `#enableTwikoo` - Enable Twikoo comments.
*   `#envId = xxx` - The environment ID of Twikoo.

### Enabling Article Views Counting (Optional)

*   `#enableVisitors` - Enable counting article views.

### Enabling Appreciation Functionality (Optional)

To enable the appreciation functionality, add the following attribute:

*   `#enableReward`

After enabling appreciation functionality, replace the "Alipay QR Code" and "WeChat Pay QR Code" images under "My Blog → Ankia-Theme → imgs" with your own payment QR codes.

### Other Optional Features

*   `#enableTravellings` - Display a travel icon in the navigation bar.
*   `#enableForeverblog` - Display a "Ten Years Pact" icon in the navigation bar.

## Explanation of Friends' Links Functionality

### Changing Your Own Friends' Links Information

Modify the `myInfo` variable in the "fLinks.js" file under the "Friends' Links" note with your own blog information:

```text-plain
const myInfo = {
    "title": "<Blog Name>",
    "link": "<Blog Link>",
    "img": "<Blogger Avatar>",
    "des": "<Blog Description>"
}
```

### Adding Others as Friends' Links

Similarly, in the "fLinks.js" file, add entries to the `fLinks` variable following the format:

```text-plain
"<Number>": {
    "title": "<Blog Name>",
    "link": "<Blog Link>",
    "img": "<Blogger Avatar>",
    "des": "<Blog Description>"
}
```

User Guide
----

## Creating Blog Categories

Creating blog categories is simple. Create child notes under the "My Blog" note and assign the following attributes to those notes:

*   `#categoryName = xxx` - This attribute is used by the "blogStateChange" script to find the corresponding category. It is recommended to keep it consistent with the category title.
*   `#sorted=date #sortDirection=desc` - (Optional but recommended) Sort blog posts by publication date in descending order.

## Publishing a Blog Post

You can write your blog post anywhere in your note repository. The only thing you need to do before writing a new blog post is to select the "Blog Post Template".

Here's how to create a new blog post:

1. Right-click on any parent note where you want to store your blog post (e.g., Today's Diary).
2. Move your mouse over "Insert child note".
3. Select "Blog Post Template".

A blog post has four basic attributes:

*   **Category** - The category to which the blog post belongs. It should match the value of `#categoryName` for the corresponding category.
*   **Tags** - Tags for the blog post. Multiple tags can be added.
*   **Header Image** - The preview image displayed on the homepage for the blog post. You need to provide a URL or image hosting link.
*   **Time** - The publication time of the blog post.

Publishing a blog post is simple. Just click the "Publish" button, and it will be published automatically. If you want to unpublish a blog post, simply uncheck the "Publish" option.

## How to Pin a Blog Post

To pin a blog post, add the following attribute to the desired blog post. This will make it appear at the top of the "Timeline" and its corresponding category.

*   `#blogPostTop`

Code highlighting

This theme comes with the PrismJS code highlighting plugin, which currently supports HTML, XML, SVG, MathML, SSML, Atom, RSS, CSS, JavaScript, EJS, Go, C, C++, Python, ini, Bash, Json, Shell, SQL, TypeScript and YAML.
