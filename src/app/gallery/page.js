// app/gallery/page.js
export default function Gallery() {
    const sections = [
        { title: "Section 1", images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"] },
        { title: "Section 2", images: ["img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg"] },
        { title: "Section 3", images: ["img13.jpg", "img14.jpg", "img15.jpg", "img16.jpg", "img17.jpg", "img18.jpg"] },
        { title: "Section 4", images: ["img19.jpg", "img20.jpg", "img21.jpg", "img22.jpg", "img23.jpg", "img24.jpg"] },
        { title: "Section 5", images: ["img25.jpg", "img26.jpg", "img27.jpg", "img28.jpg", "img29.jpg", "img30.jpg"] },
        { title: "Section 6", images: ["img31.jpg", "img32.jpg", "img33.jpg", "img34.jpg", "img35.jpg", "img36.jpg"] },
        { title: "Section 7", images: ["img37.jpg", "img38.jpg", "img39.jpg", "img40.jpg", "img41.jpg", "img42.jpg"] },
    ];

    return (
        <div className="gallery-container">
            {sections.map((section, index) => (
                <div key={index} className="section">
                    <h2 className="section-title">{section.title}</h2>
                    <div className="image-slider">
                        {section.images.map((src, i) => (
                            <div key={i} className="image-container">
                                <img 
                                    src={`/images/${src}`} 
                                    alt={`Image ${i + 1}`} 
                                    className="image" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
