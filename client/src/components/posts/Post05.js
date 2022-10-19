import { useLocation } from "react-router-dom";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Post05 = () => {
  const location = useLocation();
  const Created = "October 10, 2021";
  let TopPic = "media/avif400x400.png";
  let Title =
    "Save Space with the AVIF Image Format";

  if (location.pathname.toString() === "/blog") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <h2 className="itemDate">{Created}</h2>
      </span>
    );
  }

  let code= `<img
    src="/images/millslakermnp.avif"
    width="360"
    height="240"
    alt="Mills Lake, RMNP">
  </img>`;

  let Section1 = (
    <div>
      <p className="ptext">
        People have been putting images in web pages for as long as there has been a web. But the most widely used image file formats - JPEG and PNG - have some drawbacks.
      </p>
      <h4 className="subtitle">
        What's Wrong with JPEG and PNG?
      </h4>
        JPEG
        <ul>
          <li>No Transparency (no transparent backgrounds)</li>
          <li>No Animation</li>
          <li>No Depth Maps</li>
          <li>No Overlays</li>
        </ul>
        <p className="ptext">
        JPEG is a 'lossy' compression format. That means it loses detail when the image is compressed. Nevertheless, because it compresses images to a small size, it is considered best for web photographs.
      </p>
        PNG
        <ul>
          <li>Low compression</li>
          <li>Is best for non-photographic quality images</li>
        </ul>
        <p className="ptext">
        PNG supports transparency, but the amount of compression it achieves is very low, especially for photographs. This is because it is a 'lossless' format; meaning, it does not lose detail when the image is compressed.  Unfortunately, this lack of compression makes the file size much larger than for the same image saved as a JPEG.
      </p>
      <h4 className="subtitle">
        Codecs
      </h4>
      <p className="ptext">
        A codec is an algorithm used to encode an image for saving it to a file, and decoding the saved file to display it on a screen. JPEG and PNG are both codecs.
      </p>
      <p className="ptext">
        When you are deciding which format (codec) to use, there are many criteria, but the 3 most important are usually:
        </p>
        <ul>
          <li>Compression</li>
          <li>Quality</li>
          <li>Speed</li>
        </ul>
        <p className="ptext">
        Compression measures how much compression a codec can achieve. The higher the compression, the smaller the file size will be, and therefore, the faster the file will transfer across the network. However, as we know, higher compression guarantees loss of image data. This might be ok if image quality isn't as important to you as page load speed.
        <br/><br/>
        The highest quality images will be lossless, not losing any data during compression. PNG compression is very close to lossless, while lossy JPEG images lose a lot of data during compression and their quality suffers.
        <br/><br/>
        Speed refers to how fast the compression/decompression algorithm is. A complex codec algorithm can greatly increase the amount of time it takes to decode an image in a browser after it is downloaded. This will have a negative impact on page load time, and a negative effect on page analytics.
        <br/><br/>
        Progressive Decoding allows images to load gradually beginning with as little as 10% of their data. The user sees an approximation of the image while it's still in progress. Both JPEG and PNG support various forms of progressive decoding. It can be configured when you are encoding (saving) an image file. Keep in mind, however, that for JPEG, the user may get an approximate image earlier, but progressive decoding itself will slow down the total time needed to decode the image.
      </p>
      <h4 className="subtitle">
        AVIF
      </h4>
      <p className="ptext">
        AVIF stands for <i>Av1 image file format</i>. It was developed in 2019 by the Alliance for Open Media (<a
          href="https://aomedia.org/"
          className="link-primary"
        >AOMedia</a>) as the still image implementation of their AV1 video format  used by several popular streaming platforms. AVIF is open source software.  It is state-of-the-art and royalty free. Anyone can use it!
        <br/><br/>
        AVIF produces high quality results which are better, smaller, and faster than JPEG or PNG. Here, I used <a
          href="https://squoosh.app"
          className="link-primary"
        >
          Squoosh
        </a> to convert the site background image from PNG to AVIF:
      </p>
      <img className="responsive-img" src="media/aviftopngcomparison.png" width="400px" height="auto" alt="Post" />
      <p className="ptext">
        <br/>
        The AVIF image is 95% smaller than the original PNG.
        <br/>
        Note that for JPEG, the average size reduction is usually 10% - 15%.
        <br/><br/>
        AVIF supports several nice features:
        </p>
        <ul>
          <li>Animations and live photos through multilayer images stored in image sequences</li>
          <li>Better near lossless compression than JPEG</li>
          <li>12-bit color depth allowing high dynamic range (HDR) and wide color gamut (WCG) images</li>
          <li>Monochrome and multi-channel images</li>
        </ul>

      <p className="ptext">
        You can use an AVIF file just like any other image file type.
      </p>
      <SyntaxHighlighter
          language="jsx"
          style={nightOwl}
        >
          {code}
      </SyntaxHighlighter>

        <p className="ptext">
        One caveat is that AVIF is not supported by older browsers. To work around this, you can provide a fallback image using the &lt;picture&gt; element.
      </p>
      <p className="ptext">
        We will all be using AVIF soon!
      </p>
    </div>
  );
  return (
    <div className="post-wrapper post">
      <div className="post-img-top">
        <img src={TopPic} alt="Post" />
      </div>
        <h3 className="post-title text-center">{Title}</h3>
        <div className="sec01">
        {Section1}
        </div>
      </div>
  );
};
