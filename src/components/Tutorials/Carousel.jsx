import { Button, Carousel } from "antd";
import { useRef } from "react";

export default function CarouselTab() {
    const ref = useRef()
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}>
            <div
                style={{
                    width: "300px",
                    height: "300px"
                }}
            >
                <Carousel
                    autoplay
                    dots={true}
                    dotPosition="bottom"
                    pauseOnHover={true}
                    pauseOnDotsHover={true}
                    draggable
                    ref={ref}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div>
                        <img
                            style={{
                                height: "300px",
                                width: "300px",
                                objectFit: "cover",
                            }}
                            src="/img1.jpg" />
                    </div>
                    <div>
                        <img
                            style={{
                                height: "300px",
                                width: "300px",
                                objectFit: "cover",
                            }}
                            src="/img2.jpg" />
                    </div>
                    <div>
                        <img
                            style={{
                                height: "300px",
                                width: "300px",
                                objectFit: "cover",
                            }}
                            src="/img3.jpg" />
                    </div>
                    <div>
                        <img
                            style={{
                                height: "300px",
                                width: "300px",
                                objectFit: "cover",
                            }}
                            src="/img4.jpg" />
                    </div>
                </Carousel>
            </div>
            <div>
                <Button
                    onClick={() => {
                        ref.current.prev();
                    }}
                >
                    Prev
                </Button>
                <Button
                    onClick={() => {
                        ref.current.goTo(0);
                    }}
                >
                    Reset
                </Button>
                <Button
                    onClick={() => {
                        ref.current.next();
                    }}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}