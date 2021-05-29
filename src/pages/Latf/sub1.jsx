import styled from 'styled-components'
import Image from '../../components/Image'


const SubOne = () => {
    return (
        <div style={{ backgroundColor: "#180920", marginTop: "20%" }}>
            <Image
                style={{ margin: "10%" }}
                positionX={"center"}
                mTop={'100px'}
                pic={I10}
                imgWidth={"80%"}
                onClick={(e) => openModal(e)}
            />

            <div style={{ justifyContent: "flex-end", display: "flex" }}>
                <div
                    style={{
                        color: "#b3c53f",
                        display: "flex",
                        flexDirection: "column",
                        width: "35%",
                        alignItems: "flex-end",
                        paddingBottom: "10%",
                    }}
                >
                    <div style={{ width: "80%" }}>
                        <p>I know even though I can't see it</p>
                        <p>somewhere waiting for me</p>
                        <p>there will always be love</p>
                    </div>
                    <br />
                    <div style={{ width: "60%" }}>
                        <p>Enrico Garzilli</p>
                        <p>from Rage of the Heart</p>
                    </div>
                </div>
            </div>
        </div>
    )

}


