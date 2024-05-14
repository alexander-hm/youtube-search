import React from 'react';
// import WebView from 'react-native-webview';
// import { Platform } from 'react-native';

const VideoDetail = (props) => {
  // example of destructuring, the below is equivalent to props.route.params.video
  const { route } = props;
  const { video } = route.params;

  return (
    <iframe
      src={`https://www.youtube.com/embed/${video.id.videoId}`
      }
      style={{ width: '100%', height: '100%' }
      }
    />
  );

  // if (Platform.OS === 'web') {
  //   <iframe
  //     src={`https://www.youtube.com/embed/${video.id.videoId}`
  //     }
  //     style={{ width: '100%', height: '100%' }
  //     }
  //   />
  // }

  // return (
  //   <WebView
  //     source={{ uri: `https://www.youtube.com/embed/${video.id.videoId}` }}
  //     automaticallyAdjustContentInsets={false}
  //   />
  // );
};

export default VideoDetail;