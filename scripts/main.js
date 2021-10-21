function checkScroll() {
    const videos = document.querySelectorAll(".hero__video");

    for(const video of videos) {
        const boundingRect = video.getBoundingClientRect();
        const visible = (boundingRect.top + boundingRect.height > 0 &&
            boundingRect.top < window.innerHeight);

        if (visible) {
            video.play();
        } else {
            video.pause();
        }
    }
}

 function (props, defaultProps) {
    // Fix for SCRIPT1028 in Edge
    return Object.assign({}, defaultProps, props);
  }

function initSr() {
    const defaultProps = {
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      distance: "30px",
      duration: 1000,
      desktop: true,
      mobile: true,
    };
  
    /* Section Title */
    ScrollReveal().reveal(
      ".section-title",
      assignProps(
        {
          delay: 300,
          distance: "0px",
          origin: "bottom",
        },
        defaultProps
      )
    );
  
    /* Hero Section */
    ScrollReveal().reveal(
      ".hero",
      assignProps(
        {
          delay: 500,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
        defaultProps
      )
    );
  
    ScrollReveal().reveal(
      ".hero__cta",
      assignProps(
        {
          delay: 1000,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
        defaultProps
      )
    );
  
    /* About Section */
    ScrollReveal().reveal(
      ".about__wrapper-image",
      assignProps(
        {
          delay: 600,
          origin: "bottom",
        },
        defaultProps
      )
    );
  
    ScrollReveal().reveal(
      ".about__wrapper-info",
      assignProps(
        {
          delay: 1000,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
        defaultProps
      )
    );
  
    /* Projects Section */
    ScrollReveal().reveal(
      ".project-wrapper__text",
      assignProps(
        {
          delay: 500,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
        defaultProps
      )
    );
  
    ScrollReveal().reveal(
      ".project-wrapper__image",
      assignProps(
        {
          delay: 1000,
          origin: window.innerWidth > 768 ? "right" : "bottom",
        },
        defaultProps
      )
    );
  
    /* Contact Section */
    ScrollReveal().reveal(
      ".contact-wrapper",
      assignProps(
        {
          delay: 800,
          origin: "bottom",
        },
        defaultProps
      )
    );
  }
  