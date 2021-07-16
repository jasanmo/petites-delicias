import parse from "html-react-parser";
import Image from "next/image";

export default function ContentImage(props) {
  return parse(props.content, {
    replace: (domNode) => {
      if (!domNode) {
        return
      }
      
      if(domNode.name === "img" ) {
        return (
          <Image 
            src={domNode.attribs.src} 
            width={domNode.attribs.width} 
            height={domNode.attribs.height}
            alt={`Image for ${domNode.attribs.src}`}
          />
        )
      }
    }
  })
}