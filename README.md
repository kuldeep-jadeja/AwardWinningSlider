# 🎨 Award-Winning Slider

A stunning, modern image carousel with synchronized text animations and smooth transitions. Built with vanilla JavaScript, jQuery, Slick Carousel, and GSAP animations.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)

## ✨ Features

-   🖼️ **Dual Synchronized Sliders** - Image carousel perfectly synced with text content
-   🎭 **Smooth Animations** - GSAP-powered zoom effects and fluid transitions
-   📱 **Responsive Design** - Optimized layouts for mobile and desktop
-   🎯 **Center Mode** - Active slide scales and centers for dramatic effect
-   ⚡ **Auto-play** - Automatic slideshow with customizable timing
-   🎨 **Elegant UI** - Minimalist navigation with decorative overlays
-   🔄 **Custom Easing** - Cubic bezier curves for professional motion

## 🚀 Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-blue?style=flat-square)](https://award-winning-slider.kuldeepjadeja.dev/)

The slider features:

-   5 beautiful high-quality images from Unsplash
-   Synced headline text for each slide
-   Zoom-in/out animation on slide transitions
-   Elegant circular navigation buttons
-   Dark overlay panels for depth

## 📋 Prerequisites

No installation required! This project uses CDN links for all dependencies:

-   jQuery 3.6.0
-   Slick Carousel 1.9.0
-   GSAP 3.12.5
-   Ionicons 4.5.10

## 🛠️ Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/kuldeep-jadeja/AwardWinningSlider.git
    ```

2. **Navigate to the project folder**

    ```bash
    cd AwardWinningSlider
    ```

3. **Open in your browser**
    ```bash
    # Simply open index.html in your preferred browser
    # Or use a local server:
    python -m http.server 8000
    # Then visit: http://localhost:8000
    ```

## 📁 Project Structure

```
AwardWinningSlider/
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # Slider logic and animations
└── README.md           # Project documentation
```

## 🎯 Usage

### Basic Setup

The slider is ready to use out of the box. Simply open `index.html` in a browser.

### Customization

**Change Autoplay Speed:**

```javascript
// In script.js, modify autoplaySpeed (in milliseconds)
autoplaySpeed: 2400,  // Change to your preferred timing
```

**Add More Slides:**

```html
<!-- Add to both .text-slider and .image-slider in index.html -->
<div class="text-slide">
    <h1>Your New <br />Heading</h1>
</div>

<div
    class="image-slide"
    style="background: url(YOUR_IMAGE_URL) center/cover no-repeat;"
></div>
```

**Customize Animation:**

```javascript
// In script.js, adjust GSAP animation parameters
gsap.fromTo(
    `.slick-slide[data-slick-index="${next}"]`,
    { scale: 0.9, opacity: 0 }, // Starting state
    { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }, // End state
);
```

## 🎨 Color Scheme

-   **Background:** `#0f0f0f` (Near black)
-   **Text:** `#fff` (White)
-   **Overlay:** `rgba(0, 0, 0, 0.65)` (Semi-transparent black)

## 📱 Responsive Breakpoints

-   **Desktop:** Full experience with all decorative elements
-   **Mobile (<990px):** Simplified layout with adjusted text size and positioning

## 🔧 Configuration Options

### Slider Settings

| Option          | Value                         | Description                |
| --------------- | ----------------------------- | -------------------------- |
| `autoplay`      | `true`                        | Enable automatic sliding   |
| `autoplaySpeed` | `2400`                        | Time between slides (ms)   |
| `speed`         | `1800`                        | Transition duration (ms)   |
| `slidesToShow`  | `2` (images), `1` (text)      | Visible slides             |
| `centerMode`    | `true`                        | Center active slide        |
| `cssEase`       | `cubic-bezier(.84,0,.08,.99)` | Transition timing function |

## 🌟 Key Technologies

-   **Slick Carousel** - Powerful and flexible carousel library
-   **GSAP (GreenSock)** - Professional-grade animation engine
-   **jQuery** - DOM manipulation and event handling
-   **Ionicons** - Clean, modern icon set
-   **CSS3** - Modern styling with transforms and transitions

## 🎓 Learning Resources

This project demonstrates:

-   Synchronized multi-slider functionality
-   GSAP animation integration
-   Responsive design patterns
-   Custom easing functions
-   CSS layering and positioning
-   Event-driven animations

## 🤝 Contributing

Contributions are welcome! Feel free to:

-   Report bugs
-   Suggest new features
-   Submit pull requests
-   Improve documentation

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Kuldeep Jadeja**

-   GitHub: [@kuldeep-jadeja](https://github.com/kuldeep-jadeja)

## 🙏 Acknowledgments

-   Images sourced from [Unsplash](https://unsplash.com)
-   Inspired by modern web design trends
-   Built with love for the web development community

---

<div align="center">

Made with ❤️ by Kuldeep Jadeja

⭐ Star this repo if you found it helpful!

</div>
