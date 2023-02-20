import styled from "styled-components";

const EmbedContainer = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 56.25%;
	padding-bottom: 0;
	box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
	margin-top: 1.6em;
	margin-bottom: 0.9em;
	overflow: hidden;
	border-radius: 8px;
	will-change: transform;

	& > iframe {
		position: absolute;
		width: 90%;
		height: 90%;
		top: 0;
		left: 0;
		border: none;
		padding: 0;
		margin: 0;
	}
`;

function Embed({src}) {
	return (
		<EmbedContainer>
			<iframe
				loading="lazy"
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					border: "none",
					padding: 0,
					margin: 0
				}}
				src={src}
				allowFullScreen={true}
				allow="fullscreen"
			></iframe>
		</EmbedContainer>
	);
}

export default Embed;
