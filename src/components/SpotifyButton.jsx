import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Svg, Path } from 'react-native-svg';

const SpotifyButton = ({ onPress }) => {
    return (
        <Pressable
            style={styles.buttonContainer}
            onPress={onPress}
        >
            <LinearGradient
                colors={['#E14176F2', '#9B091E']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Svg height="34" width="108">
                    <Path
                        d="M16.1959 0.5C7.25135 0.5 0 7.88743 0 17.0001C0 26.1132 7.25135 33.5 16.1959 33.5C25.1415 33.5 32.3921 26.1132 32.3921 17.0001C32.3921 7.88802 25.1415 0.500788 16.1957 0.500788L16.1959 0.5ZM23.6233 24.2979C23.3332 24.7826 22.7104 24.9363 22.2347 24.6387C18.432 22.2724 13.645 21.7364 8.00736 23.0487C7.46409 23.1748 6.92257 22.828 6.7988 22.2743C6.67444 21.7207 7.01347 21.169 7.55809 21.0429C13.7276 19.6069 19.0196 20.2252 23.2887 22.8832C23.7645 23.1807 23.9153 23.8132 23.6233 24.2979ZM25.6056 19.8051C25.2401 20.4104 24.4626 20.6015 23.8689 20.2291C19.5155 17.5029 12.8793 16.7134 7.73002 18.3058C7.06221 18.5114 6.35688 18.1279 6.15419 17.4487C5.95306 16.7684 6.32961 16.0512 6.99626 15.8443C12.8781 14.0261 20.1904 14.9068 25.1898 18.0367C25.7836 18.4091 25.9712 19.201 25.6056 19.8051ZM25.7758 15.1267C20.5559 11.968 11.9438 11.6776 6.96009 13.2186C6.1598 13.4659 5.31348 13.0056 5.07096 12.1903C4.82843 11.3746 5.27983 10.5129 6.0807 10.2651C11.8017 8.49568 21.3121 8.83753 27.3219 12.4722C28.0432 12.9075 28.2792 13.8546 27.8518 14.587C27.4263 15.3204 26.4941 15.5621 25.7766 15.1267H25.7758ZM44.0638 15.732C41.2672 15.0526 40.7702 14.5758 40.7702 13.5739C40.7702 12.6273 41.6443 11.9903 42.9459 11.9903C44.2069 11.9903 45.4562 12.474 46.7675 13.4698C46.8062 13.5 46.8565 13.512 46.9048 13.5041C46.9551 13.4966 46.9976 13.4692 47.0267 13.4281L48.3921 11.4672C48.4482 11.3864 48.4327 11.2751 48.3573 11.2134C46.7965 9.93797 45.0404 9.3179 42.9865 9.3179C39.9675 9.3179 37.8575 11.1639 37.8575 13.8052C37.8575 16.6376 39.6774 17.6405 42.8221 18.4146C45.4969 19.0426 45.9494 19.5686 45.9494 20.5089C45.9494 21.5512 45.0366 22.1995 43.5667 22.1995C41.9344 22.1995 40.6019 21.6379 39.1127 20.3257C39.076 20.2922 39.0257 20.2784 38.9793 20.2803C38.929 20.2843 38.8845 20.3079 38.8536 20.3454L37.3218 22.2014C37.258 22.2802 37.2657 22.3945 37.3392 22.4615C39.0721 24.0378 41.2034 24.8693 43.5048 24.8693C46.7578 24.8693 48.8601 23.0585 48.8601 20.2547C48.8659 17.8889 47.4753 16.5786 44.0696 15.7345L44.0638 15.732ZM56.2209 12.9223C54.811 12.9223 53.6545 13.4881 52.6991 14.6477V13.3425C52.6991 13.2395 52.6179 13.1556 52.5173 13.1556H50.0128C49.9122 13.1556 49.831 13.2395 49.831 13.3425V27.8445C49.831 27.947 49.9122 28.0317 50.0128 28.0317H52.5173C52.6179 28.0317 52.6991 27.947 52.6991 27.8445V23.2674C53.6545 24.357 54.811 24.891 56.2209 24.891C58.8415 24.891 61.4949 22.8359 61.4949 18.9072C61.4988 14.9777 58.8454 12.9221 56.2228 12.9221L56.2209 12.9223ZM58.5823 18.9072C58.5823 20.9069 57.3736 22.3039 55.6407 22.3039C53.9291 22.3039 52.6372 20.8439 52.6372 18.9072C52.6372 16.9703 53.9291 15.5107 55.6407 15.5107C57.3446 15.5105 58.5823 16.9388 58.5823 18.9072ZM68.293 12.9223C64.9181 12.9223 62.2743 15.5696 62.2743 18.95C62.2743 22.294 64.9007 24.9126 68.2523 24.9126C71.6388 24.9126 74.2903 22.2743 74.2903 18.9072C74.2903 15.5515 71.6562 12.9227 68.293 12.9227V12.9223ZM68.293 22.3236C66.4982 22.3236 65.1444 20.8537 65.1444 18.9062C65.1444 16.9499 66.4518 15.5302 68.2523 15.5302C70.0587 15.5302 71.4202 16.9995 71.4202 18.949C71.4202 20.9049 70.1051 22.3236 68.293 22.3236ZM81.4964 13.1556H78.7405V10.2855C78.7405 10.1827 78.6592 10.0988 78.5587 10.0988H76.0541C75.9536 10.0988 75.8704 10.1827 75.8704 10.2855V13.1556H74.6674C74.5669 13.1556 74.4856 13.2395 74.4856 13.3425V15.5349C74.4856 15.6378 74.5669 15.7219 74.6674 15.7219H75.8704V21.3956C75.8704 23.6871 76.9902 24.8496 79.2007 24.8496C80.0981 24.8496 80.8427 24.6604 81.5448 24.2545C81.6028 24.223 81.6376 24.16 81.6376 24.093V22.0044C81.6376 21.9413 81.6047 21.8803 81.5506 21.8468C81.4964 21.8113 81.4287 21.8093 81.3726 21.8389C80.8911 22.0852 80.425 22.1995 79.9028 22.1995C79.1002 22.1995 78.7405 21.8271 78.7405 20.9956V15.7229H81.4964C81.597 15.7229 81.6782 15.639 81.6782 15.5359V13.3437C81.6821 13.2407 81.6008 13.1567 81.4983 13.1567L81.4964 13.1556ZM91.0968 13.1668V12.8143C91.0968 11.7773 91.4875 11.3149 92.3616 11.3149C92.8838 11.3149 93.3035 11.4205 93.7735 11.5801C93.8315 11.5986 93.8914 11.5893 93.9379 11.5541C93.9862 11.5188 94.0133 11.4622 94.0133 11.4023V9.25269C94.0133 9.17052 93.963 9.09782 93.8837 9.07358C93.3886 8.92324 92.7542 8.76896 91.8027 8.76896C89.4916 8.76896 88.2674 10.0958 88.2674 12.6046V13.1445H87.0644C86.9638 13.1445 86.8807 13.2285 86.8807 13.3313V15.5349C86.8807 15.6378 86.9638 15.7219 87.0644 15.7219H88.2674V24.4713C88.2674 24.5757 88.3505 24.6585 88.4511 24.6585H90.9537C91.0562 24.6585 91.1374 24.5757 91.1374 24.4713V15.7225H93.4756L97.0574 24.4713C96.6513 25.3895 96.2509 25.5727 95.7055 25.5727C95.2646 25.5727 94.7985 25.4387 94.3247 25.1727C94.2802 25.1491 94.226 25.1451 94.1796 25.1589C94.1313 25.1767 94.0906 25.2121 94.0713 25.2594L93.2223 27.1569C93.1817 27.2475 93.2165 27.3519 93.3016 27.3992C94.1873 27.8879 94.9861 28.0967 95.9744 28.0967C97.8233 28.0967 98.8464 27.2179 99.7457 24.8575L104.089 13.4221C104.113 13.3646 104.105 13.2996 104.07 13.2486C104.037 13.1979 103.981 13.1674 103.921 13.1674H101.314C101.235 13.1674 101.165 13.218 101.14 13.2927L98.4692 21.0626L95.545 13.2876C95.5179 13.2153 95.4502 13.1674 95.3748 13.1674H91.0968V13.1668ZM85.5307 13.1556H83.0262C82.9256 13.1556 82.8425 13.2395 82.8425 13.3425V24.4713C82.8425 24.5757 82.9256 24.6585 83.0262 24.6585H85.5307C85.6313 24.6585 85.7145 24.5757 85.7145 24.4713V13.3433C85.7145 13.2403 85.6332 13.1563 85.5307 13.1563V13.1556ZM84.293 8.08801C83.3008 8.08801 82.4963 8.9061 82.4963 9.91669C82.4963 10.9279 83.3008 11.747 84.293 11.747C85.2851 11.747 86.0877 10.9279 86.0877 9.91669C86.0877 8.9063 85.2832 8.08801 84.293 8.08801ZM106.228 16.7339C105.238 16.7339 104.467 15.9231 104.467 14.9385C104.467 13.9539 105.248 13.1339 106.238 13.1339C107.228 13.1339 108 13.9445 108 14.9283C108 15.9129 107.219 16.7339 106.228 16.7339ZM106.238 13.3124C105.335 13.3124 104.652 14.0434 104.652 14.9385C104.652 15.8333 105.331 16.5544 106.228 16.5544C107.132 16.5544 107.814 15.824 107.814 14.9283C107.814 14.0335 107.135 13.3124 106.238 13.3124ZM106.629 15.1129L107.128 15.8238H106.706L106.257 15.1716H105.873V15.8238H105.521V13.9394H106.344C106.776 13.9394 107.058 14.1634 107.058 14.5405C107.06 14.8495 106.884 15.0382 106.631 15.1129H106.629ZM106.331 14.2627H105.873V14.8587H106.331C106.559 14.8587 106.696 14.7446 106.696 14.5604C106.696 14.3665 106.559 14.2627 106.331 14.2627Z"
                        fill="white"
                    />
                </Svg>
            </LinearGradient>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 230,
        height: 52,
        borderRadius: 30,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#e14176',
        borderStyle: 'solid',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SpotifyButton;
