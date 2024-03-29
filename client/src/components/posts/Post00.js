import { useLocation } from "react-router-dom";

export const Post00 = () => {
  const location = useLocation();
  let TopPic = "media/reactnativetopt.png";
  let Title =
    "Setup React Native Development in Windows";
  const Created = "February 28, 2022";

    if (location.pathname.toString() === "/bloglist") {
      return (
        <span>
          <span className="blog">{Title}</span>
          <div className="blogListIemDate">{Created}</div>
        </span>
      );
    }

  let Section1 = (
    <div>
      <p className="ptext">
        There's no mystery to setting up a development environment in Windows 11 to create your awesome React Native app. We'll be done before you know it!
      </p>
      <h4 className="subtitle">Install Android Studio</h4>
      <p className="ptext">
        To make the future easy, let's start by installing the <a href="https://chocolatey.org/" className="link-primary">Chocolatey Package Manager for Windows</a>. <br/>Open an Administrator Command Prompt and execute this command: <br/><br/>
        <code>choco install -y nodejs.install openjdk8</code>
        </p>
        <p className="ptext">
        Next, download and install <a href="https://developer.android.com/studio" className="link-primary">Android Studio</a>
      </p>
        <p className="ptext">
        Open Android Studio<br/>
        Go to Appearance and Behavior &gt; System Settings &gt; Android SDK<br/>
        Make note of the location of the SDK. For example,<br/>
        <code>C:\Users\username\AppData\Local\Android\Sdk</code><br/><br/>

        In the lower right corner, check Show Package Details<br/>
        Select the SDK Platforms tab in the SDK Manager<br/><br/>
        Expand Android 10 (Q)<br/>
        Within Android 10 (Q), select Android SDK Platform 29<br/>
        Next, select either Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image (either is ok for Intel processors) or select an AMD version
        </p>
        <p className="ptext">
        Move over to the SDK Tools tab in the SDK Manager<br/>
        Check Show Package Details in the lower right again<br/>
        Expand the SDK Build Tools item<br/>
        Select version 29.0.2<br/><br/>
        Click Apply to download and install the Android SDK and Build Tools
      </p>
      <h4 className="subtitle">Add Windows Environment Variables</h4>
      <p className="ptext">
        Open Windows Settings &gt; System<br/>
        Expand Device Specifications<br/>
        Click Advanced System Settings to open the System Properties dialog<br/><br/>
        Select the Advanced tab and click Environment Variables<br/><br/>
        You can update your user variables or the system-wide variables (either is ok)<br/><br/>
        Create a new variable called ANDROID_HOME<br/>
        Set it equal to the SDK location you noted above<br/><br/>
        Add the path to the platform tools to the Path variable. By default, it is in the directory you noted above with "\platform-tools" appended to it like this:<br/>
        <code>C:\Users\username\AppData\Local\Android\Sdk\platform-tools</code><br/><br/>
        If you installed Chocolatey, you can update to the new environment variables by simply running<br/><br/>
        <code>refreshenv</code><br/><br/>
        Otherwise, close the command prompt and open a new Administrator command prompt
      </p>
      <h4 className="subtitle">Create a new React Native Project</h4>
      <p className="ptext">
        Instead of installing the React Native CLI, we can always be sure we're using the latest version by running it with npx.<br/>
        Go to the parent directory where you would like the new project to be created and run the react-native command from there. For example:<br/><br/>
        <code>cd d:\repo</code><br/>
        <code>npx react-native init NativeTest</code><br/><br/>
        A new project called NativeTest will be waiting for you in:<br/>
        <code>d:\repo\NativeTest</code>
      </p>
      <h4 className="subtitle">Congratulations! You're done!</h4>
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
