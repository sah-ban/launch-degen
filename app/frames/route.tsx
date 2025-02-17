import { Button } from "frames.js/next";
import { frames } from "./frames";



const frameHandler = frames(async () => {
  interface UserData {
  fid: string;
  }

  let userData: UserData | null = null;
  
  const SplashScreen = () => (
    <div tw="flex flex-col w-full h-full bg-[#1E293B] text-[#f5deb3] font-sans font-bold">
        <div tw="flex justify-center mt-20">
                <img
                  src="https://wrpcd.net/cdn-cgi/imagedelivery/BXluQx4ige9GuW0Ia56BHw/dda7b6c0-d6c1-4ad4-e0b5-61495dbe6a00/original"
                  alt="Profile"
                  tw="w-60 h-60"
                />
        </div>
        <div tw="flex justify-center mt-17">
  <img
    src="https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/degen-stats.png"
    alt="Profile"
    tw="w-[700px]"  // Adjust width as needed
  />
</div>

    
        </div>
      );


  const launch = `https://warpcast.com/~/frames/launch?domain=degen-v2.vercel.app`;

  const buttons = [];

  if (!userData) {
    buttons.push(
      <Button
        action="link"
        target={launch}      >
       Launch Frame 
      </Button>
    );
  }

  return {
    image: <SplashScreen /> ,
    buttons: buttons,
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
