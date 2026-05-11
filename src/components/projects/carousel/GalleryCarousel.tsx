'use client'
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the type for card data
interface CardData {
  imgUrl: string;
  alt: string;
}

interface GalleryCarouselProps {
  data?: CardData[];
}

const GalleryCarousel = ({ data = [] }: GalleryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to allow infinite scroll
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  // Prefetch all images on mount
  useEffect(() => {
    if (data.length === 0) return;

    const imagePromises = data.map((card) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = card.imgUrl;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((err) => {
        console.error('Error loading images:', err);
        setImagesLoaded(true); // Still show even if some images fail
      });
  }, [data]);

  // Always show 1 card per view for maximum image size
  const cardsPerView = 1;

  // Show navigation only if more than 2 images
  const showNavigation = data.length > 2;

  // Create extended array for infinite scroll
  // [last, ...data, first] for seamless looping
  const getExtendedData = () => {
    if (data.length <= 1) return data;
    return [data[data.length - 1], ...data, data[0]];
  };

  const extendedData = getExtendedData();

  // Calculate the percentage to move per slide
  const slidePercentage = 100 / extendedData.length;

  // Set initial position to show first real image (index 1 in extended array)
  useEffect(() => {
    if (containerRef.current && data.length > 1) {
      containerRef.current.style.transform = `translateX(-${currentIndex * slidePercentage}%)`;
    }
  }, []);

  // Auto-slide effect - only when there's more than 1 image
  useEffect(() => {
    // Only auto-slide if there's more than 1 image and images are loaded
    if (data.length <= 1 || !imagesLoaded || isPaused) {
      return;
    }

    // Clear any existing interval
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }

    // Set up auto-slide interval (2.5 seconds)
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 2500);

    // Cleanup on unmount or when dependencies change
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [data.length, imagesLoaded, isPaused, currentIndex]);

  const nextSlide = () => {
    if (isAnimating || data.length <= 1) return;

    setIsAnimating(true);
    const nextIndex = currentIndex + 1;

    if (containerRef.current) {
      // Smooth transition to next slide
      containerRef.current.style.transition = "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)";
      containerRef.current.style.transform = `translateX(-${nextIndex * slidePercentage}%)`;

      setTimeout(() => {
        // If we're at the cloned last slide, jump to the real first slide
        if (nextIndex === extendedData.length - 1) {
          containerRef.current!.style.transition = "none";
          containerRef.current!.style.transform = `translateX(-${1 * slidePercentage}%)`;
          setCurrentIndex(1);
        } else {
          setCurrentIndex(nextIndex);
        }
        setIsAnimating(false);
      }, 600);
    }
  };

  const prevSlide = () => {
    if (isAnimating || data.length <= 1) return;

    setIsAnimating(true);
    const prevIndex = currentIndex - 1;

    if (containerRef.current) {
      // Smooth transition to previous slide
      containerRef.current.style.transition = "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)";
      containerRef.current.style.transform = `translateX(-${prevIndex * slidePercentage}%)`;

      setTimeout(() => {
        // If we're at the cloned first slide, jump to the real last slide
        if (prevIndex === 0) {
          containerRef.current!.style.transition = "none";
          containerRef.current!.style.transform = `translateX(-${(extendedData.length - 2) * slidePercentage}%)`;
          setCurrentIndex(extendedData.length - 2);
        } else {
          setCurrentIndex(prevIndex);
        }
        setIsAnimating(false);
      }, 600);
    }
  };

  // Pause auto-slide on mouse enter
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Resume auto-slide on mouse leave
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  if (!data || data.length === 0) {
    return (
      <div style={{
        width: '100%',
        textAlign: 'center',
        color: 'white',
        padding: '2rem 0'
      }}>
        No hay imágenes disponibles
      </div>
    );
  }

  // Show loading state while images are prefetching
  if (!imagesLoaded) {
    return (
      <div style={{
        width: '100%',
        height: '362px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        background: 'rgba(255, 255, 255, 0.05)',
        color: 'white'
      }}>
        Cargando imágenes...
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        position: 'relative'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{
        width: '100%',
        position: 'relative'
      }}>
        {/* Navigation Buttons — inside the image, vertically centered */}
        {showNavigation && data.length > cardsPerView && (
          <>
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              aria-label="Imagen anterior"
              className="gallery-nav-btn gallery-nav-prev"
            >
              <ChevronLeft size={24} strokeWidth={2} />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              aria-label="Siguiente imagen"
              className="gallery-nav-btn gallery-nav-next"
            >
              <ChevronRight size={24} strokeWidth={2} />
            </button>
          </>
        )}

        {/* Cards Container Wrapper */}
        <div style={{
          overflow: 'hidden',
          width: '100%',
          borderRadius: '10px'
        }}>
          {/* Sliding Cards Container */}
          <div
            ref={containerRef}
            style={{
              display: 'flex',
              width: `${extendedData.length * 100}%`,
              transform: `translateX(-${currentIndex * slidePercentage}%)`,
              transition: 'none',
              willChange: 'transform'
            }}
          >
            {extendedData.map((card, idx) => (
              <div
                key={`slide-${idx}`}
                style={{
                  width: `${100 / extendedData.length}%`,
                  boxSizing: 'border-box',
                  flexShrink: 0
                }}
              >
                <div style={{
                  width: '100%',
                  height: '362px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={card.imgUrl}
                    alt={card.alt || ''}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      userSelect: 'none',
                      pointerEvents: 'none',
                      display: 'block'
                    }}
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel styles */}
      <style>{`
        .gallery-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: transparent;
          color: white;
          padding: 0;
          border-radius: 0;
          border: none;
          cursor: pointer;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
          opacity: 0.8;
        }
        .gallery-nav-btn:hover {
          opacity: 1;
        }
        .gallery-nav-prev {
          left: 20px;
        }
        .gallery-nav-next {
          right: 12px;
        }
        @media (max-width: 768px) {
          .gallery-nav-prev {
            left: 12px;
          }
          .gallery-nav-next {
            right: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryCarousel;
