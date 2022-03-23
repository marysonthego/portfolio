import react from "react";

export const Post01 = () => {
  let TopPic = "media/amazon600.png";
  let Title =
    "How to use Windows Subsystem for Android to run React Native Apps";

  let Section1 = (
    <div>
      <p className="post-text">
        In a previous post,{" "}
        <a href="/post00" className="link-primary">
          How to Setup a React Native Development Environment in Windows
        </a>
        , I walked through the steps to install Android Studio. I intentionally
        skipped over the steps to install and configure Android Virtual Devices
        (AVDs). Due to their size, adding an AVD can make a first-time Android
        Studio install take 2 - 4 hours to complete. The good news is, we won't
        need one!
      </p>
      <p className="post-text">
        Android Studio comes with support for creating AVDs for many different
        versions of Android, and there may be times when you can't avoid using
        one or more to test on an older Android version. If that happens, you
        can create and control AVDs in the AVD Manager in Android Studio.
        However, there are a few things you need to be aware of before spending
        a lot of time installing an AVD.
      </p>

      <p className="post-text">
        If your computer has an Intel processor it must support the Intel
        Hardware Accelerated Execution Manager{" "}
        <a
          href="https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows"
          className="link-primary"
        >
          HAXM
        </a>
        . Unfortunately, not all Intel processors do. To use HAXM, your Intel
        processor must support:
      </p>
      <ul>
        <li>Intel VT-x</li>
        <li>Intel EM64T (Intel 64)</li>
        <li>Execute Disable (XD) Bit functionality</li>
      </ul>
      <p className="post-text">
        If your computer has an AMD processor it must support Secure Virtual
        Machine (SVM) Technology
      </p>
      <p className="post-text">
        Finally, as mentioned, AVDs can be big! One AVD can easily take up more
        than 100GB of disk space and require least 4GB of RAM (8GB recommended).
      </p>
      <p className="post-text">
        If you're still interested in using Android Studio AVDs, you can learn
        how to install and configure them{" "}
        <a
          href="https://developer.android.com/studio/run/emulator-acceleration#accel-graphics"
          className="link-primary"
        >
          here
        </a>
        . Otherwise, read on!
      </p>
      <p className="post-text">
        An alternative to the AVD emulator is the new <i>Windows Subsystem for
        Android</i> (WSA). If you aren't enrolled in the{" "}
        <a
          href="https://insider.windows.com/en-us/register"
          className="link-primary"
        >
          Windows Insider Program
        </a>
        , you can get it in the US in the{" "}
        <a
          href="https://www.microsoft.com/en-us/store/apps/windows"
          className="link-primary"
        >
          Windows Store
        </a>{" "}
        by installing the <i>Amazon Appstore Preview</i>. Amazon's Appstore runs in a
        WSA which gets silently installed in the background. You can read the
        official Microsoft documentation about the WSA and the Appstore{" "}
        <a
          href="https://docs.microsoft.com/en-us/windows/android/wsa/"
          className="link-primary"
        >
          here
        </a>
        .
      </p>
      <p className="post-text">
        Until recently, it was harder to use the WSA for development than
        necessary, since the only official way to install new apps was via the Amazon Appstore installer. There are workarounds -
        everything from sideloading, installing Google Play manually (it's not
        included), or installing a 3rd-party launcher - all of which are
        time-consuming, and come with varying degrees of difficulty.
      </p>
      <p className="post-text emphasized">
        If what you need is a light-weight Android emulator for testing your
        React-Native apps, you'll be happy to hear that WSA Pacman makes loading
        and debugging easy!
      </p>
      <p className="post-text">
        WSA Pacman is an Android package manager for Windows with integrated VS
        Code debugging and a GUI app installer. You can download the executable
        installer from the latest release link on{" "}
        <a
          href="https://github.com/alesimula/wsa_pacman"
          className="link-primary"
        >
          GitHub
        </a>
        . Here's a quick walk-thru to get you up and running.
      </p>
      <h4 className="subtitle">Install WSA Pacman</h4>
      <p className="post-text">
        Search for and install the <i>Amazon Appstore Preview</i> from the{" "}
        <a
          href="https://www.microsoft.com/en-us/store/apps/windows"
          className="link-primary"
        >
          Windows Store
        </a>{" "}
        . It will appear in the Windows App list.
      </p>
      <img className="post-img-top" src="media/post0101.png" alt="Post " />
      <p className="post-text"><br/>
        Scroll down and you will see that the Windows Subsystem for Android
        Settings app was also installed.
      </p>
      <img className="post-img-top" src="media/post0102.png" alt="Post " />
      <p className="post-text"><br/>
        Install the WSA Pacman executable installer you downloaded from{" "}
        <a
          href="https://github.com/alesimula/wsa_pacman"
          className="link-primary"
        >
          Github
        </a>
        . It will also appear in the Windows App list.
      </p>
      <img className="post-img-top" src="media/post0103.png" alt="Post " />
      <p className="post-text"><br/>
        Open Windows Subsystem for Android Settings and turn on Developer mode.
        You can see the IP address it is using. It listens on port 58526 (the
        default for debugging WSA). I'll show you where you can change that in a
        moment.
      </p>
      <img className="post-img-top" src="media/post0104.png" alt="Post " />
      <p className="post-text"><br/>
        WSA should be running in Developer mode now, so go ahead and start WSA
        Pacman. Click the settings gear in the upper right corner.
      </p>
      <img className="post-img-top" src="media/post0105.png" alt="Post " />
      <p className="post-text"><br/>
        The port used by WSA can be changed in the WSA settings. Don't forget to
        click restart if you do need to change it.
      </p>
      <img className="post-img-top" src="media/post0106.png" alt="Post " />
      <p className="post-text"><br/>
        Click WSA to go back, then click Manage Applications. When you click the
        three vertical dots in the upper right corner, App info will show you
        some details about each running process and add the system processes as
        well.
      </p>
      <img className="post-img-top" src="media/post0107.png" alt="Post " />
      <p className="post-text"><br/>
        Go back to the main page again and click Manage Settings. You can click
        on each item to see and change settings.
      </p>
      <img className="post-img-top" src="media/post0108.png" alt="Post " />
      <h4 id="debug" className="subtitle">Debug a React Native App in WSA</h4>
      <p className="post-text">
        If you need a React Native app to test with or you need to setup your
        Windows development environment, see my post{" "}
        <a href="/post00" className="link-primary">
          How to Setup a React Native Development Environment in Windows
        </a>
        .
      </p>
      <p className="post-text">
        Open the NativeTest app in VS Code. <br />
        In the project directory, start the Metro bundler. <br /><br/>
        <code>npx react-native start</code>
      </p>
      <div className="post-img-top">
      <img  src="media/post0109.png" alt="Post " />
      </div>
      <p className="post-text"><br/>
        Leave Metro running <br />
        Open a new terminal and run this command:
        <br /><br/>
        <code>npx react-native run-android</code>
      </p>
      <img className="post-img-top" src="media/post0110.png" alt="Post " />
      <p className="post-text"><br/>
        After a moment WSA should open with the running app
      </p>
      <p className="post-text"><br/>
        You can edit the app in VS Code and it will rebundle and reload
        automatically. <br /><br/>
        If needed, just type 'rr' in the WSA window to reload the app.
      </p>
      <img className="post-img-top" src="media/post0112.png" alt="Post " />
      <h4 className="subtitle">
        Woo Hoo! You're up and running React Native on Windows!
      </h4>
    </div>
  );
  return (
    <div className="post-wrapper post">
      <div className="post-img-top">
        <img src={TopPic} alt="Post" />
      </div>
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01">{Section1}</div>
    </div>
  );
};
