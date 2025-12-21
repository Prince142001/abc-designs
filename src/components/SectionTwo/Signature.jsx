import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Signature({
  triggerRef = null,
  startPosition = "top 80%",
  endPosition = "bottom 20%",
  scrubSpeed = 1,
}) {
  const svgRef = useRef(null);
  const pathsRef = useRef([]);

  useLayoutEffect(() => {
    const paths = pathsRef.current.filter(Boolean);
    if (!paths.length || !svgRef.current) return;

    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0,
      });
    });

    const sign = gsap.timeline();

    const scrollTrigger = ScrollTrigger.create({
      animation: sign,
      trigger: triggerRef?.current || svgRef.current,
      start: startPosition,
      end: endPosition,
      scrub: scrubSpeed,
      markers: false,
      id: "signature-animation",
    });

    // Fade in and draw signature
    sign
      .to(paths, {
        opacity: 1,
        duration: 5,
        delay: 3,
      })
      .to(
        paths,
        {
          strokeDashoffset: 0,
          ease: "none",
          stagger: 0.4,
        },
        "-=0.05"
      ); // Slight overlap

    return () => {
      scrollTrigger.kill();
      sign.kill();
    };
  }, [triggerRef, startPosition, endPosition, scrubSpeed]);

  return (
    <div className="w-full flex items-center justify-center">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="166.37833"
        height="42.379333"
        viewBox="0 0 166.37833 42.379333"
        className="w-3/4 md:w-full max-w-41.5 h-auto"
      >
        <path
          ref={(el) => (pathsRef.current[0] = el)}
          className="fill-none stroke-black stroke-[1.2] stroke-linecap-round stroke-linejoin-miter"
          d="m 18.646486,24.491886 c -3.75765,-2.74853 -9.3094796,-3.6191 -13.7674196,-1.188 -3.38412,2.8197 -6.25784,6.74361 -2.53846,12.56452 3.14547,4.92273 8.9935896,6.77483 15.2169196,5.3927 6.22332,-1.38213 11.0123,-6.85741 14.49104,-12.08062 3.47874,-5.2232 5.07307,-10.51011 6.52932,-16.58175 0.95636,-2.56701 -0.23132,-12.87590968 0.95712,-5.3220597 1.18844,7.5538497 1.69948,13.5011297 2.84146,18.4496597 1.14198,4.94853 1.95311,13.2101 3.74783,12.7892 2.02371,-5.23147 3.86231,-9.2906 6.47008,-15.13748 2.82714,-6.33874 7.53118,-14.4087497 10.10012,-18.0521497 2.56894,-3.64339 4.74881,-7.62413 2.30975,-1.71249 -2.43906,5.91164 -2.85988,13.1738197 -3.15431,18.7706797 -0.29443,5.59686 0.46558,11.86718 2.40358,14.27351 1.938,2.40632 2.10116,2.45935 5.96483,4.23601"
        />
        <path
          ref={(el) => (pathsRef.current[1] = el)}
          className="fill-none stroke-black stroke-[1.202] stroke-linecap-round stroke-linejoin-miter"
          d="m 75.143906,29.943686 c -1.14677,3.7488 1.91634,16.48147 6.75254,10.05874 9.54838,-19.58302 14.17294,-6.29981 11.65141,-10.27492 -5.05234,-3.82776 -9.64758,9.10714 -3.19693,11.44971 6.10549,2.17958 10.211184,-3.91012 12.129654,-7.97693 1.91847,-4.06681 0.59682,-1.80406 2.98607,-6.23561 2.38925,-4.43156 4.52564,-15.65363 3.72551,-21.5454397 -1.22523,-4.24304 -5.11794,-2.42463 -5.71571,5.8910397 -0.59776,8.31566 -1.3347,18.95163 -0.97863,25.97136 0.48712,2.36207 0.21178,5.73672 3.20151,0.11755 1.8386,-3.15459 6.45344,-11.6397 7.74394,-4.12552 1.14524,6.66838 0.30072,8.99337 3.28501,7.32979 2.9843,-1.66359 5.7126,-1.16874 10.52978,-4.28619 4.81718,-3.11745 1.26611,-11.96903 -2.83427,-4.19985 -4.10038,7.76918 6.15245,11.31437 10.53992,6.28814 4.38747,-5.02623 5.92476,-11.94216 7.89487,-17.66581 1.97011,-5.72365 2.96963,-17.0086197 0.42166,-17.6433197 -2.54796,-0.63471 -4.42189,11.0299097 -4.53633,17.1204697 -0.11444,6.09056 -1.68983,13.89614 1.81411,18.65145 4.07661,5.5325 7.46873,-0.51418 9.96224,-2.73003 1.2537,-1.1141 1.72859,1.98275 2.64097,1.93677 2.79426,-0.14083 7.28281,-8.76031 1.86438,-8.50318 -5.41843,0.25713 -2.16931,13.92868 3.65851,11.2633 5.82782,-2.66539 5.22857,-4.68257 7.09322,-6.79876 M 76.640796,20.489726 c 0.73549,-6.18633 -6.76079,1.29404 -0.94321,1.04802 0.76417,-1.07347 0.92874,-0.98754 0.73361,-2.30563"
        />
      </svg>
    </div>
  );
}
