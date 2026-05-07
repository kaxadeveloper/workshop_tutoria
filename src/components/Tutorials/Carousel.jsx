import { Carousel } from "antd";

export default function CarouselTab() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}>
            <div style={{ width: "300px", height: "300px", backgroundColor: "transparent" }}
            >
                <Carousel>
                    <div>
                        <img style={{ height: "100%", width: "100%" }} src="/img1.jpg" />
                    </div>
                    <div>
                        <img style={{ height: "100%", width: "100%" }} src="/img2.jpg" />
                    </div>
                    <div>
                        <img style={{ height: "100%", width: "100%" }} src="/img3.jpg" />
                    </div>
                    <div>
                        <img style={{ height: "100%", width: "100%" }} src="/img4.jpg" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}