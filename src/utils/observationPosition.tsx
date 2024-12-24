import ObservationPosition from "../interfaces/ObservationPosition";

const observationPosition: ObservationPosition = (setIsVisible, cardRef, threshold) => {
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
            threshold: threshold
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