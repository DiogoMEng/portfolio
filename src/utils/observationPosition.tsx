import ObservationPosition from "../interfaces/ObservationPosition";

const observationPosition: ObservationPosition = (setIsVisible, cardRef) => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        },
        {
            threshold: 0.7
        }
    );

    if(cardRef.current) {
        observer.observe(cardRef.current);
    }

    return () => {
        if(cardRef.current) {
            observer.unobserve(cardRef.current);
        }
    };
}

export default observationPosition;