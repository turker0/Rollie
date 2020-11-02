import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { G, Circle, Path, Ellipse } from "react-native-svg";

export default function AvatarsList({ index, setIndex }) {
  return (
    <View style={styles.container}>
      {
        //Avatar1
      }
      <TouchableOpacity
        onPress={() => {
          setIndex(0);
        }}
      >
        <Svg viewBox="0 0 61.8 61.804" width={62} height={62}>
          <G data-name="Layer 2">
            <G data-name="\u2014\xCE\xD3\xC8 1">
              <Circle
                cx={30.9}
                cy={30.9}
                r={30.9}
                fill={
                  index === 0
                    ? "rgba(255,255,255,.1)"
                    : "rgba(255,255,255,0.06)"
                }
              />
              <Path
                fill="#f9dca4"
                fillRule="evenodd"
                d="M23.255 38.68l15.907.121v12.918l-15.907-.121V38.68z"
              />
              <Path
                d="M53.478 51.993A30.814 30.814 0 0130.9 61.8a31.547 31.547 0 01-9.23-1.402 31.124 31.124 0 01-13.626-8.704l1.283-3.1 13.925-6.212c0 4.535 1.519 7.06 7.648 7.153 7.57.113 8.261-2.515 8.261-7.19l12.79 6.282z"
                fill="#fff"
                fillRule="evenodd"
              />
              <Path
                d="M39.166 38.778v3.58c0 .297-.004.802-.029 1.273-4.155 5.56-14.31 2.547-15.771-5.053z"
                fillRule="evenodd"
                opacity={0.11}
              />
              <Path
                d="M31.129 8.432c21.281 0 12.988 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Path
                d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.978 31.978 0 01-1.472-7.658zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.997 31.997 0 001.471-7.658z"
                fill="#f9dca4"
                fillRule="evenodd"
              />
              <Path
                d="M22.035 35.1a1.879 1.879 0 01-.069-.504v-.005a1.422 1.422 0 011.22-1.361 1.046 1.046 0 00.907 1.745 4.055 4.055 0 00.981-.27c.293-.134.607-.289.943-.481a13.439 13.439 0 001.426-1.014 3.04 3.04 0 011.91-.787 2.015 2.015 0 011.293.466 2.785 2.785 0 01.612.654 2.77 2.77 0 01.612-.654 2.015 2.015 0 011.292-.466 3.039 3.039 0 011.911.787 13.42 13.42 0 001.426 1.014c.336.192.65.347.943.48a4.054 4.054 0 00.981.271 1.046 1.046 0 00.906-1.745 1.422 1.422 0 011.22 1.36h.002l-.001.006a1.879 1.879 0 01-.069.504c-.78 3.631-7.373 2.769-9.223.536-1.85 2.233-8.444 3.095-9.223-.536z"
                fill="#8a5c42"
                fillRule="evenodd"
              />
              <Path
                d="M26.431 5.74h9.504a8.529 8.529 0 018.504 8.504v6.59H17.927v-6.59a8.529 8.529 0 018.504-8.504z"
                fill="#464449"
                fillRule="evenodd"
              />
              <Path
                d="M12.684 19.828h36.998a1.372 1.372 0 011.369 1.368 1.372 1.372 0 01-1.369 1.37H12.684a1.372 1.372 0 01-1.368-1.37 1.372 1.372 0 011.368-1.368z"
                fill="#333"
                fillRule="evenodd"
              />
              <Path fill="#677079" d="M17.927 15.858H44.44v3.97H17.927z" />
              <Path
                d="M29.42 48.273v13.49a29.098 29.098 0 003.528-.03v-13.46zM23.255 42.176l6.164 7.281-8.837 2.918-.023-9.023 2.696-1.176zM39.192 42.176l-6.164 7.281 8.838 2.918.022-9.023-2.696-1.176z"
                fill="#d5e1ed"
                fillRule="evenodd"
              />
              <Path
                d="M24.018 45.933l5.09 1.98a2.581 2.581 0 014.05.04l5.19-2.02v7.203l-5.193-2.016a2.581 2.581 0 01-4.044.039l-5.093 1.977z"
                fill="#464449"
                fillRule="evenodd"
              />
              <Path
                d="M15.115 46.012l3.304-1.474v14.638a34.906 34.906 0 01-3.304-1.706zM46.933 46.163l-3.304-1.625v14.527a31.278 31.278 0 003.304-1.745z"
                fill="#8a5c42"
                fillRule="evenodd"
              />
            </G>
          </G>
        </Svg>
      </TouchableOpacity>
      {
        //Avatar2
      }
      <TouchableOpacity
        onPress={() => {
          setIndex(1);
        }}
      >
        <Svg viewBox="0 0 61.8 61.8" height={62} width={62}>
          <G data-name="Layer 2">
            <G data-name="\u2014\xCE\xD3\xC8 1">
              <Circle
                cx={30.9}
                cy={30.9}
                r={30.9}
                fill={
                  index === 1
                    ? "rgba(255,255,255,.1)"
                    : "rgba(255,255,255,0.06)"
                }
              />
              <Path
                fill="#f9dca4"
                fillRule="evenodd"
                d="M23.255 38.68l15.907.149v3.617l7.002 3.339-15.687 14.719-13.461-15.34 6.239-2.656V38.68z"
              />
              <Path
                d="M53.478 51.993A30.813 30.813 0 0130.9 61.8a31.226 31.226 0 01-3.837-.237A34.071 34.071 0 0115.9 57.919a31.034 31.034 0 01-7.856-6.225l1.283-3.1 11.328-5.054c.875 4.536 4.235 11.535 10.176 15.502a24.128 24.128 0 0011.057-15.318l10.063 4.903z"
                fill="#677079"
                fillRule="evenodd"
              />
              <Path
                d="M39.791 42.745c.728.347 1.973.928 2.094.999-2.03 6.368-15.72 8.7-19.756-.756z"
                fillRule="evenodd"
                opacity={0.11}
              />
              <Path
                d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Path
                d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.974 31.974 0 01-1.472-7.658zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 001.471-7.658z"
                fill="#f9dca4"
                fillRule="evenodd"
              />
              <Path
                d="M23.396 15.437c-.592 2.768-.384 5.52-3.008 6.028-.624.12-1.037.965-1.172 1.71a22.896 22.896 0 00-.38 4.931c.104.569-.396-1.092-.396-1.092l-.085-3.174s-.037-.608-.023-1.535c.03-1.88.244-4.928 1.196-5.86 1.421-1.39 3.868-1.008 3.868-1.008zM39.095 15.437c.592 2.768.385 5.52 3.008 6.028.624.12 1.038.965 1.172 1.71a21.808 21.808 0 01.312 4.947c-.105.57.395-1.092.395-1.092l.166-3.178s.025-.62.01-1.547c-.028-1.88-.242-4.928-1.195-5.86-1.421-1.39-3.868-1.008-3.868-1.008z"
                fill="#ad835f"
                fillRule="evenodd"
              />
              <Path
                d="M25.364 46.477c-1.51-1.457-2.718-2.587-3.814-3.718-1.405-1.451-1.881-2.922-2.154-5.498a110.846 110.846 0 01-1.043-13.43s1.034 6.333 2.962 9.455c.99 1.603 5.04-2.165 6.655-2.738a2.683 2.683 0 013.24.782 2.636 2.636 0 013.213-.782c1.616.573 5.61 3.792 6.656 2.738 2.515-2.536 3.057-9.446 3.057-9.446a113.885 113.885 0 01-1.129 13.576c-.363 2.746-.547 3.81-1.486 4.884a30.775 30.775 0 01-4.57 4.193c-.828.656-2.267 1.272-5.933 1.25-3.406-.02-4.803-.446-5.654-1.267zM39.604 15.997a2.638 2.638 0 012.76 1.227c1.556 2.613 1.685 2.95 1.685 2.95s-.184-4.674-.295-5.23a.697.697 0 01.973.028c.11.222-.444-4.7-3.335-5.644-1.057-3.002-4.754-5.226-4.754-5.226l-.167 1.668a6.056 6.056 0 00-5.265-4.145c.667.751.507 1.3.507 1.3a8.152 8.152 0 00-3.288-.632c.14.889-.889 1.835-.889 1.835s-.639-.974-3.169-1.307c-.445 1.612-1.28 1.89-2.085 2.641a18.92 18.92 0 00-1.861 2.224s.083-1.557.639-2.002c.209-.138-4.716 1.803-2.252 9.036a1.962 1.962 0 00-1.945 1.462c1.39.389.815 2.49 1.593 3.852.547-1.58.909-4.658 4.328-3.852 2.448.577 4.798 1.814 7.62 1.913 3.987.139 5.501-1.954 9.2-2.098z"
                fill="#60350a"
                fillRule="evenodd"
              />
              <Path
                d="M32.415 38.594a2.774 2.774 0 002.214-.588c.72-.83 1.307-2.009.215-2.643a8.583 8.583 0 00-3.581-1.472 8.595 8.595 0 00-3.604 1.47c-1.34.775-.52 1.815.201 2.645a2.774 2.774 0 002.214.588c-.811-2.824 3.153-2.824 2.341 0z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
            </G>
          </G>
        </Svg>
      </TouchableOpacity>
      {
        //Avatar3
      }
      <TouchableOpacity
        onPress={() => {
          setIndex(2);
        }}
      >
        <Svg viewBox="0 0 61.8 61.8" height={62} width={62}>
          <G data-name="Layer 2">
            <G data-name="\u2014\xCE\xD3\xC8 1">
              <Path
                d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Circle
                cx={30.9}
                cy={30.9}
                r={30.9}
                fill={
                  index === 2
                    ? "rgba(255,255,255,.1)"
                    : "rgba(255,255,255,0.06)"
                }
              />
              <Path
                d="M45.487 19.987l-29.173.175s1.048 16.148-2.619 21.21h35.701c-.92-1.35-3.353-1.785-3.909-21.385z"
                fill="#60350a"
                fillRule="evenodd"
              />
              <Path
                fill="#d5e1ed"
                fillRule="evenodd"
                d="M18.135 45.599l7.206-3.187 11.55-.3 7.42 3.897-5.357 11.215-7.613 4.088-7.875-4.35-5.331-11.363z"
              />
              <Path
                fill="#f9dca4"
                fillRule="evenodd"
                d="M24.744 38.68l12.931.084v8.949l-12.931-.085V38.68z"
              />
              <Path
                d="M37.677 38.778v3.58a9.168 9.168 0 01-.04 1.226 6.898 6.898 0 01-.313 1.327c-4.37 4.165-11.379.78-12.49-6.333z"
                fillRule="evenodd"
                opacity={0.11}
              />
              <Path
                d="M52.797 52.701a30.896 30.896 0 01-44.08-.293l1.221-3.098 9.103-4.122c3.262 5.98 6.81 11.524 12.317 15.455A45.397 45.397 0 0043.2 45.483l8.144 3.853z"
                fill="#434955"
                fillRule="evenodd"
              />
              <Path
                d="M19.11 24.183c-2.958 1.29-.442 7.41 1.42 7.383a30.842 30.842 0 01-1.42-7.383zM43.507 24.182c2.96 1.292.443 7.411-1.419 7.384a30.832 30.832 0 001.419-7.384z"
                fill="#f9dca4"
                fillRule="evenodd"
              />
              <Path
                d="M31.114 8.666c8.722 0 12.377 6.2 12.601 13.367.307 9.81-5.675 21.43-12.6 21.43-6.56 0-12.706-12.018-12.333-21.928.26-6.953 3.814-12.869 12.332-12.869z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Path
                d="M33.399 24.983a7.536 7.536 0 015.223-.993h.005c5.154.63 5.234 2.232 4.733 2.601a2.885 2.885 0 00-.785 1.022 6.566 6.566 0 01-1.052 2.922 5.175 5.175 0 01-3.464 2.312c-.168.027-.34.048-.516.058a4.345 4.345 0 01-3.65-1.554 8.33 8.33 0 01-1.478-2.53v.003s-.797-1.636-2.072-.114a8.446 8.446 0 01-1.52 2.64 4.347 4.347 0 01-3.651 1.555 5.242 5.242 0 01-.516-.058 5.176 5.176 0 01-3.464-2.312 6.568 6.568 0 01-1.052-2.921 2.75 2.75 0 00-.77-1.023c-.5-.37-.425-1.973 4.729-2.603h.002a7.545 7.545 0 015.24 1.01l-.001-.001.003.002.215.131a3.93 3.93 0 003.842-.148l-.001.001zm-4.672.638a6.638 6.638 0 00-6.157-.253c-1.511.686-1.972 1.17-1.386 3.163a5.617 5.617 0 00.712 1.532 4.204 4.204 0 003.326 1.995 3.536 3.536 0 002.966-1.272 7.597 7.597 0 001.36-2.37c.679-1.78.862-1.863-.82-2.795zm10.947-.45a6.727 6.727 0 00-5.886.565c-1.538.911-1.258 1.063-.578 2.79a7.476 7.476 0 001.316 2.26 3.536 3.536 0 002.967 1.272 4.228 4.228 0 00.43-.048 4.34 4.34 0 002.896-1.947 5.593 5.593 0 00.684-1.44c.702-2.25.076-2.751-1.828-3.451z"
                fill="#464449"
                fillRule="evenodd"
              />
              <Path
                d="M17.89 25.608c0-.638.984-.886 1.598 2.943a22.164 22.164 0 00.956-4.813c1.162.225 2.278 2.848 1.927 5.148 3.166-.777 11.303-5.687 13.949-12.324 6.772 3.901 6.735 12.094 6.735 12.094s.358-1.9.558-3.516c.066-.538.293-.733.798-.213C48.073 17.343 42.3 5.75 31.297 5.57c-15.108-.246-17.03 16.114-13.406 20.039z"
                fill="#8a5c42"
                fillRule="evenodd"
              />
              <Path
                d="M24.765 42.431a14.125 14.125 0 006.463 5.236l-4.208 6.144-5.917-9.78z"
                fill="#fff"
                fillRule="evenodd"
              />
              <Path
                d="M37.682 42.431a14.126 14.126 0 01-6.463 5.236l4.209 6.144 5.953-9.668z"
                fill="#fff"
                fillRule="evenodd"
              />
              <Circle cx={31.223} cy={52.562} r={0.839} fill="#434955" />
              <Circle cx={31.223} cy={56.291} r={0.839} fill="#434955" />
              <Path
                d="M41.997 24.737c1.784.712 1.719 1.581 1.367 1.841a2.886 2.886 0 00-.785 1.022 6.618 6.618 0 01-.582 2.086v-4.949zm-21.469 4.479a6.619 6.619 0 01-.384-1.615 2.748 2.748 0 00-.77-1.023c-.337-.249-.413-1.06 1.154-1.754z"
                fill="#464449"
                fillRule="evenodd"
              />
            </G>
          </G>
        </Svg>
      </TouchableOpacity>
      {
        //Avatar4
      }
      <TouchableOpacity
        onPress={() => {
          setIndex(3);
        }}
      >
        <Svg viewBox="0 0 61.8 61.8" height={62} width={62}>
          <G data-name="Layer 2">
            <G data-name="\u2014\xCE\xD3\xC8 1">
              <Circle
                cx={30.9}
                cy={30.9}
                r={30.9}
                fill={
                  index === 3
                    ? "rgba(255,255,255,.1)"
                    : "rgba(255,255,255,0.06)"
                }
              />
              <Path
                fill="#f9dca4"
                fillRule="evenodd"
                d="M23.255 38.68l15.907.121v12.918l-15.907-.121V38.68z"
              />
              <Path
                d="M53.478 51.993A30.814 30.814 0 0130.9 61.8a31.206 31.206 0 01-3.837-.237A34.069 34.069 0 0115.9 57.919a31.032 31.032 0 01-7.856-6.225l1.283-3.1 13.925-6.212c0 4.535 1.31 10.02 7.439 10.113 7.57.114 8.47-5.475 8.47-10.15l12.79 6.282z"
                fill="#434955"
                fillRule="evenodd"
              />
              <Path
                d="M39.166 38.778v3.58a7.785 7.785 0 01-.099 1.18 6.52 6.52 0 01-.395 1.405c-5.374 4.164-13.939.748-15.306-6.365z"
                fillRule="evenodd"
                opacity={0.11}
              />
              <Path
                d="M31.129 8.432c21.281 0 12.988 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Path
                d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.977 31.977 0 01-1.472-7.659zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.998 31.998 0 001.471-7.658z"
                fill="#f9dca4"
                fillRule="evenodd"
              />
              <Path
                d="M23.252 42.382a48.332 48.332 0 00-13.204 5.288c-1.645.945-1.605 2.399-1.237 2.926 1.316 1.882 5.551-.522 7.089-1.16a84.89 84.89 0 018.041-2.989 8.592 8.592 0 01-.689-4.065z"
                fill="#677079"
                fillRule="evenodd"
              />
              <Path
                d="M31.209 60.625c-3.027-2.19-7.913-8.17-7.957-15.213 0 7.68 15.91 7.65 15.91-.03-.652 8.036-4.983 13.179-7.953 15.243z"
                fill="#fff"
                fillRule="evenodd"
              />
              <Path
                d="M39.277 42.157a52.227 52.227 0 0112.192 5.326c1.645.945 1.605 2.398 1.237 2.925-1.316 1.882-5.551-.522-7.089-1.159-2.98-1.235-6.154-2.87-7.03-3.027a8.591 8.591 0 00.69-4.065zM23.255 40.89c-.112 7.495 5.759 14.21 10.055 20.18.13.18-.127-.179 0 0-.573-.033-.78.44-1.379.345-5.324-.843-11.383-3.965-12.981-6.47-.303-.474 3.34-3.912 3.151-4.434-.102-.284-3.172.096-4.918.647-.128.04-.142-.238-.171-.369-.809-3.712.593-7.876 6.243-9.9z"
                fill="#677079"
                fillRule="evenodd"
              />
              <Path
                d="M31.53 60.085a.353.353 0 11-.108.697 26.957 26.957 0 01-7.175-2.247 10.997 10.997 0 01-4.466-3.401c-.27-.425.587-1.526 1.49-2.68a12.29 12.29 0 001.643-2.343 8.808 8.808 0 00-1.615-.029 15.84 15.84 0 00-3.093.374c-.11.027-.219.058-.324.09l-.024.007a.41.41 0 01-.48-.236 2.304 2.304 0 01-.21-.817 6.746 6.746 0 01-.005-1.304 8.368 8.368 0 015.613-7.133.353.353 0 01.263.656 7.681 7.681 0 00-5.17 6.538 6.032 6.032 0 00.002 1.166 3.059 3.059 0 00.061.373l.105-.027a16.624 16.624 0 013.246-.392 4.106 4.106 0 012.163.337.35.35 0 01.129.149.303.303 0 01.016.041l.008.027c.129.52-.846 1.77-1.773 2.957a219.53 219.53 0 00-1.45 1.866 10.353 10.353 0 004.179 3.145 26.217 26.217 0 006.975 2.186z"
                fill="#434955"
                fillRule="evenodd"
              />
              <Path
                d="M39.162 40.89c.116 7.721-6.387 14.71-10.71 20.813 9.957.15 13.058-4.555 15.016-6.759.373-.42-3.34-3.911-3.151-4.433.102-.284 3.172.096 4.917.647.129.04.143-.237.172-.369.809-3.712-.593-7.876-6.244-9.9z"
                fill="#677079"
                fillRule="evenodd"
              />
              <Path
                d="M29.313 61.2a.353.353 0 11.061-.704 14.12 14.12 0 006.967-1.355 14.012 14.012 0 005.72-4.387c.002-.004-.706-.911-1.45-1.865-.927-1.188-1.902-2.438-1.773-2.958l.007-.026a.346.346 0 01.017-.042.355.355 0 01.129-.15 4.107 4.107 0 012.162-.336 16.624 16.624 0 013.247.392l.104.027a3.037 3.037 0 00.061-.373 6.032 6.032 0 00.002-1.166 7.681 7.681 0 00-5.17-6.537.353.353 0 01.264-.656 8.368 8.368 0 015.612 7.132 6.746 6.746 0 01-.005 1.304 2.304 2.304 0 01-.21.817.41.41 0 01-.48.236l-.024-.006a5.414 5.414 0 00-.323-.091 15.84 15.84 0 00-3.094-.373 8.81 8.81 0 00-1.614.028 12.27 12.27 0 001.644 2.343c.902 1.156 1.76 2.256 1.489 2.68a14.749 14.749 0 01-6.024 4.652 14.815 14.815 0 01-7.319 1.413z"
                fill="#434955"
                fillRule="evenodd"
              />
              <Circle cx={40.111} cy={54.597} r={0.839} fill="#e6e6e6" />
              <Circle cx={22.427} cy={54.597} r={0.839} fill="#e6e6e6" />
              <Circle cx={19.315} cy={48.072} r={0.839} fill="#e6e6e6" />
              <Circle cx={43.202} cy={48.072} r={0.839} fill="#e6e6e6" />
              <Path
                d="M17.034 25.782a2.746 2.746 0 01.582-1.205 12.17 12.17 0 002.22 7.126c-1.575-14.925 1.527-17.546 1.527-17.546s9.318 7.031 19.669-.019c0 0 3.279 2.639 1.704 17.564 1.575-2.325 1.93-4.307 2.044-7.195a2.466 2.466 0 01.716 1.406s1.774-9.07-2.154-14.081c.356-.563 2.175-2.139 2.737-2.101s-2.4-1.2-6-.6a10.935 10.935 0 012.963-2.213 21.344 21.344 0 00-5.55-.338 16.103 16.103 0 013.375-1.95 15.98 15.98 0 00-8.888-.112 14.069 14.069 0 013.675-3.075s-9.487.525-14.437 7.575a5.614 5.614 0 01.096-3.413s-6.263 5.879-4.279 20.177zM31.259 46.344c-6.417-2.945-3.82-7.121-3.82-7.121a2.47 2.47 0 001.68 2.037 5.907 5.907 0 012.14-2.476 7.359 7.359 0 012.095 2.476 2.471 2.471 0 001.68-2.037s2.64 4.176-3.775 7.121z"
                fill="#464449"
                fillRule="evenodd"
              />
              <Path
                d="M20.887 24.242l.063-.015c7.112-1.767 8.763.026 9.147.943a3.966 3.966 0 012.294.01c.376-.914 2.012-2.727 9.152-.953l.062.015 1.104.293a.361.361 0 01-.192.696l-.643-.174c.02 1.454-.316 5.533-4.67 5.845-4.64.331-4.935-3.882-4.932-5.001a3.192 3.192 0 00-2.051-.014c.005 1.099-.274 5.347-4.933 5.015-4.354-.312-4.69-4.391-4.67-5.845l-.642.174a.361.361 0 11-.193-.696z"
                fill="#677079"
                fillRule="evenodd"
              />
              <Path
                d="M36.128 23.883a10.984 10.984 0 012.434-.019l-2.901 6.513a3.908 3.908 0 01-1.896-1.19l2.363-5.304zm-11.576-.32a12.06 12.06 0 012.67-.021l-3.183 7.142a4.286 4.286 0 01-2.078-1.304l2.59-5.816zm3.59.154l-3.246 7.145q.19.025.392.04c.082.005.163.01.242.013l3.182-7.002a4.536 4.536 0 00-.57-.195zm11.26.307l-2.96 6.515q.173.023.357.036c.075.005.149.01.221.012l2.902-6.385a4.245 4.245 0 00-.52-.178z"
                fill="#e6e6e6"
                fillRule="evenodd"
                opacity={0.5}
              />
              <Path
                d="M20.887 24.242a.351.351 0 01.063-.015c7.112-1.767 8.763.026 9.147.943a3.966 3.966 0 012.294.01c.376-.914 2.012-2.727 9.152-.953a.34.34 0 01.062.015c.355.089.722.186 1.104.293a.361.361 0 01-.192.696c-.22-.061-.433-.119-.643-.174.02 1.454-.316 5.533-4.67 5.845-4.64.331-4.935-3.882-4.932-5.001a3.192 3.192 0 00-2.051-.014c.005 1.099-.274 5.347-4.933 5.015-4.354-.312-4.69-4.391-4.67-5.845-.21.055-.423.113-.642.174a.361.361 0 11-.193-.696c.382-.107.749-.204 1.104-.292zm16.266 5.938c3.957-.283 4.04-4.267 3.994-5.308-7.813-1.915-8.132.574-8.145.775L33 25.67c0 .014-.353 4.831 4.152 4.51zM20.95 24.227l.091-.002a.339.339 0 00-.092.002zm.396.644c-.047 1.042.037 5.026 3.993 5.309 4.505.321 4.153-4.496 4.152-4.51v-.023c-.014-.201-.333-2.69-8.145-.775z"
                fill="#464449"
                fillRule="evenodd"
              />
            </G>
          </G>
        </Svg>
      </TouchableOpacity>
      {
        //Avatar5
      }
      <TouchableOpacity
        onPress={() => {
          setIndex(4);
        }}
      >
        <Svg viewBox="0 0 61.8 61.8" width={62} height={62}>
          <G data-name="Layer 2">
            <G data-name="\u2014\xCE\xD3\xC8 1">
              <Path
                d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Circle
                cx={30.9}
                cy={30.9}
                r={30.9}
                fill={
                  index === 4
                    ? "rgba(255,255,255,.1)"
                    : "rgba(255,255,255,0.06)"
                }
              />
              <Path
                d="M16.647 25.104s1.394 18.62-1.98 23.645 16.51-.19 16.51-.19l.006-34.863z"
                fill="#302e33"
                fillRule="evenodd"
              />
              <Path
                d="M45.705 25.104s-1.394 18.62 1.981 23.645-16.51-.19-16.51-.19l-.006-34.863z"
                fill="#302e33"
                fillRule="evenodd"
              />
              <Path
                d="M52.797 52.701c-.608-1.462-.494-2.918-5.365-5.187-2.293-.542-8.21-1.319-9.328-3.4-.567-1.052-.43-2.535-.43-5.292l-12.93-.142c0 2.777.109 4.258-.524 5.298-1.19 1.957-8.935 3.384-11.338 4.024-4.093 1.819-3.625 2.925-4.165 4.406a30.896 30.896 0 0044.08.293z"
                fill="#f9dca4"
                fillRule="evenodd"
              />
              <Path
                d="M37.677 38.778l-.015 2.501a5.752 5.752 0 00.55 3.011c-4.452 3.42-12.794 2.595-13.716-5.937z"
                fillRule="evenodd"
                opacity={0.11}
              />
              <Path
                d="M19.11 24.183c-2.958 1.29-.442 7.41 1.42 7.383a30.842 30.842 0 01-1.42-7.383zM43.507 24.182c2.96 1.292.443 7.411-1.419 7.384a30.832 30.832 0 001.419-7.384z"
                fill="#f9dca4"
                fillRule="evenodd"
              />
              <Path
                d="M31.114 8.666c8.722 0 12.377 6.2 12.601 13.367.307 9.81-5.675 21.43-12.6 21.43-6.56 0-12.706-12.018-12.333-21.928.26-6.953 3.814-12.869 12.332-12.869z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Path
                d="M31.183 13.697c-.579 2.411-3.3 10.167-14.536 11.407C15.477 5.782 30.182 6.256 31.183 6.311c1.002-.055 15.707-.53 14.536 18.793-11.235-1.24-13.957-8.996-14.536-11.407z"
                fill="#464449"
                fillRule="evenodd"
              />
              <Path
                d="M52.797 52.701c-14.87 4.578-34.168 1.815-39.915-4.699-4.093 1.819-3.625 2.925-4.165 4.406a30.896 30.896 0 0044.08.293z"
                fill="#e9573e"
                fillRule="evenodd"
              />
              <Path
                fill="#e9573e"
                fillRule="evenodd"
                d="M42.797 46.518l1.071.253-.004 8.118h-1.067v-8.371z"
              />
              <Path
                d="M23.834 44.42c.002.013.878 4.451 7.544 4.451 6.641 0 7.046-4.306 7.047-4.318l.188.183c0 .012-.564 4.702-7.235 4.702-6.797 0-7.756-4.83-7.759-4.845z"
                fill="#464449"
                fillRule="evenodd"
              />
              <Ellipse
                cx={31.324}
                cy={49.445}
                rx={1.513}
                ry={1.909}
                fill="#464449"
              />
            </G>
          </G>
        </Svg>
      </TouchableOpacity>
      {
        //Avatar6
      }
      <TouchableOpacity
        onPress={() => {
          setIndex(5);
        }}
      >
        <Svg viewBox="0 0 61.8 61.809" height={62} width={62}>
          <G data-name="Layer 2">
            <G data-name="\u2014\xCE\xD3\xC8 1">
              <Circle
                cx={30.9}
                cy={30.9}
                r={30.9}
                fill={
                  index === 5
                    ? "rgba(255,255,255,.1)"
                    : "rgba(255,255,255,0.06)"
                }
              />
              <Path
                d="M52.594 52.918a30.895 30.895 0 01-43.666-.292 9.206 9.206 0 014.036-4.832 19.806 19.806 0 014.075-2.321c-2.197-7.553 3.778-11.267 6.063-12.335 0 3.487 3.266 1.173 7.318 1.217 3.336.036 9.932 3.395 9.932-1.035 3.67 1.086 7.67 8.079 4.917 12.376a17.613 17.613 0 013.182 2.002 10.193 10.193 0 014.143 5.22z"
                fill="#4c4a4f"
                fillRule="evenodd"
              />
              <Path
                d="M23.476 38.689l15.689.09v3.438l-.008.053a9.467 9.467 0 01-.401 1.853c-1.15 3.788-4.286 5.592-7.962 7.421-2.892-1.498-6.98-4.197-7.305-8.971l-.013-.06v-.2a6.778 6.778 0 01-.005-.206c0 .035.003.07.005.105z"
                fill="#302e33"
                fillRule="evenodd"
              />
              <Path
                d="M39.161 38.66v3.58a3.812 3.812 0 01-.128.83 12.652 12.652 0 01-.544 1.812 9.516 9.516 0 01-15.014-5.97z"
                fillRule="evenodd"
                opacity={0.22}
              />
              <Path
                d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266zM19.797 49.172c.03.038 10.419 13.483 22.63-.201-1.475 4.053-7.836 7.27-11.476 7.26-6.949-.02-10.796-5.6-11.154-7.06z"
                fill="#302e33"
                fillRule="evenodd"
              />
              <Path
                d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.972 31.972 0 01-1.472-7.659zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 001.471-7.658z"
                fill="#302e33"
                fillRule="evenodd"
              />
              <Path
                d="M31.506 30.646c-.126.127.21.14-.413.122l-1.07-.635c.161-.661.843-.98.983-1.654l-.848-.757c.713-1.03 1.222-.454.671-2.3-.826-2.766 1.333-3.292-.833-7.724a19.262 19.262 0 01-1.48-4.804c-.907-4.26.695-3.813 1.38-4.42a13.506 13.506 0 00-3.991.836 10.108 10.108 0 00-2.965 1.676c-.027.542.902.353 1.262.069l2.781-1.436c-.601 1.393-.983 1.89-.22 3.505.672 1.423-.223 2.328-1.157 2.923-2.28 1.45-6.34.878-2.488 3.96a4.708 4.708 0 013.103-2.265 2.45 2.45 0 012.495 2.637 5.583 5.583 0 00.241 3.058l.477.667a12.545 12.545 0 00-1.108.769c.302.294.752.419 1.005.705.58.655.28 2.17-1.44 3.094-1.506.808-3.876 1.26-4.342 2.666.327.263.51.294.819.53.352.27.413.46.775.694.417-.378 1.904-2.393 3.406-2.385.152.762-1.481 1.322-2.382 2.884-.26.451-.373.818-.758 1.033-.52-.26-1.044-1.654-2.259-2.204-.621.564-.55.659-.092 1.28.629.853 2.42 3.551 2.882 3.942 1.055-1.192.181-.66 1.993-2.123.755.39 1.3 1.56 2.77 1.728v.151c3.055-.317 2.619-1.14 3.872-1.872 1.627 1.325 1.029 1.073 1.993 2.129a41.062 41.062 0 002.843-3.874c.154-.219.424-.479.425-.701l-.478-.708c-.03.016-.075.012-.09.05-.013.038-.068.04-.087.051l-1.06.896a9.818 9.818 0 01-1.022 1.229c-.608-.36-.556-1.066-1.518-2.022-.34-.338-.595-.595-.934-.877-.318-.265-.734-.44-.684-.983 1.485-.003 2.963 2.077 3.402 2.418l1.6-1.266c-.433-1.97-5.187-1.962-5.914-4.34-.445-1.46.468-1.614.87-1.897.236-.167.129-.082.26-.228-.275-.279-.663-.507-.973-.767.242-.94.746-.1.645-2.96-.06-1.704-.441-1.675.787-2.686.867-.712 1.343-1.038 2.8-.33.973.471 1.176 1.112 1.918 1.835.703-.272 2.495-1.876 1.12-2.591-.621-.323-2.463-.577-3.642-1.38-1.115-.758-1.655-1.727-.993-3.01a3.275 3.275 0 00-.38-3.399 10.416 10.416 0 011.553.785c.254.137 2.87 1.9 2.509.76a11.9 11.9 0 00-2.893-1.762 16.65 16.65 0 00-3.882-.864c.449.303 1.387.554 1.469 1.897a20.005 20.005 0 01-1.79 7.45c-2.113 4.35.07 4.37-.827 7.744-.397 1.495.036 1.282.723 2.127-.278.407-.537.468-.828.767.145.712.813 1.013.958 1.644a2.06 2.06 0 01-.95.514zm-9.458 1.08a11.89 11.89 0 01-2.191-2.6c-.504-.92-.672-3.187-.006-3.82.865.936 1.198 2.31 2.232 3.078 1.249.93 1.439 1.578-.035 3.342zm18.373.003c-1.612-2.258-1.154-2.385.01-3.343 1.077-.886 1.355-2.245 2-2.837.286-.262.063-.12.38-.225 1.42 2.882-1.773 6.245-2.39 6.405zM30.995 41.2l-.295 1.21c-.967-1.055-.082-1.605-.022-2.41.066-.88-.933-1.904.372-2.294l.244-.047c1.422.2.515 1.43.514 2.218-.001 1.122.81.784.113 2.433l-.402-1.203-.338-.086-.186.18zm-.751-3.961c.796.02 3.17-.12 3.55.227.76.69-.233 1.905-.254 2.638-.032 1.063.938 1.484.594 2.58-.455 1.003-1.57.787-2.964.898-.312.02-.668.038-.98.045-3.09-.203-1.153-2.529-1.218-3.525-.017-.688-.515-1.127-.51-1.862.008-1.054.618-1.002 1.782-1.001zm-1.906-13.683a1.086 1.086 0 01-.597.835c-.938.523-2.797-.776-3.392-1.165-2.163-1.415-2.635 1.548-3.324 2.259-1.182-.679-.603-2.093-.843-3.446-.179-1.013-.825-1.888-1.005-3.19-.353-2.54 1.06-4.828 2.197-6.277l.29.287c-.611.696-3.012 3.378-1.208 4.484 1.531.939-.03 2.508 1.105 3.47.383.326.353.231 1.018.296.968.095 1.074.213 2.38-1.21.45-.49.573-1.035 1.114-1.246.725.393.818 1.65.89 2.495.128 1.471-.237 1.508.775 1.913.575.23.386.125.6.495zm13.426-9.33c-.583-.79-1.459-.92-.708-1.538 1.243 1.534 2.592 3.644 2.267 6.244-.175 1.405-.825 2.09-.997 3.236-.237 1.58.427 2.388-.842 3.346-.604-.586-1.15-3.68-3.391-2.235-4.206 2.713-3.915.096-3.89.061.336-.23.978-.386 1.161-.66.377-.558-.181-3.42 1.071-4.042.533.201 1.536 1.983 2.398 2.395a2.55 2.55 0 002.085-.241c1.177-1.016-.422-2.551 1.12-3.472 1.18-.705.363-2.229-.274-3.093zM31.257 32.45l.169-.011c.665-.268.868-.768 1.555-1.143a2.136 2.136 0 012.036 1.467c-.093.439-2.144 1.515-3.286 2.476-.398.336-.066.246-.61.28a15.244 15.244 0 00-1.384-1.069c-1.332-.814-2.876-1.445-1.945-2.347a2.993 2.993 0 011.735-.858c.553.396 1.11 1.095 1.73 1.205z"
                fill="#ed4b39"
                fillRule="evenodd"
              />
              <Path
                d="M33.047 11.743q.005.067.005.137a1.8 1.8 0 11-3.6 0q0-.07.005-.137h-.005c.245-2.24 1.24-3.932 1.86-5.898.58 1.966 1.46 3.52 1.74 5.898zM41.113 12.395a2.466 2.466 0 01-.024.118 1.587 1.587 0 11-3.086-.744.657.657 0 00.028-.117 10.77 10.77 0 002.814-4.672 8.067 8.067 0 01.272 5.416zM21.326 12.404c.006.04.014.08.024.119a1.587 1.587 0 103.086-.745.649.649 0 01-.029-.117 10.771 10.771 0 01-2.813-4.672 8.067 8.067 0 00-.273 5.416z"
                fill="#e6e6e6"
                fillRule="evenodd"
              />
            </G>
          </G>
        </Svg>
      </TouchableOpacity>
      {
        //Avatar7
      }
      <TouchableOpacity
        onPress={() => {
          setIndex(6);
        }}
      >
        <Svg viewBox="0 0 61.8 61.8" height={62} width={62}>
          <G data-name="Layer 2">
            <G data-name="\u2014\xCE\xD3\xC8 1">
              <Circle
                cx={30.9}
                cy={30.9}
                r={30.9}
                fill={
                  index === 6
                    ? "rgba(255,255,255,.1)"
                    : "rgba(255,255,255,0.06)"
                }
              />
              <Path
                fill="#302e33"
                fillRule="evenodd"
                d="M23.255 38.68l15.907.146v15.602l-15.907-.147V38.68z"
              />
              <Path
                d="M53.478 51.993A30.813 30.813 0 0130.9 61.8a31.225 31.225 0 01-3.837-.237A34.072 34.072 0 0115.9 57.919a31.036 31.036 0 01-7.857-6.225l1.284-3.1 13.925-6.212c0 4.535 1.31 10.02 7.439 10.113 7.57.113 8.47-5.475 8.47-10.15l12.79 6.282z"
                fill="#857a6e"
                fillRule="evenodd"
              />
              <Path
                d="M31.462 52.495c-3.342-5.472-9.388-6.287-11.359-6.6-5.42-.86-14.56-4.28-8.564-9.72 10.765-9.764 6.898-22.032 19.513-22.032 13.47 0 8.873 12.268 19.638 22.032 5.997 5.44-3.143 8.86-8.565 9.72a14.292 14.292 0 00-10.663 6.6z"
                fill="#302e33"
                fillRule="evenodd"
              />
              <Path
                d="M39.964 42.252c-1.125 4.01-4.008 6.397-8.598 6.207-3.94-.163-7.297-2.397-8.11-6.204z"
                fillRule="evenodd"
                opacity={0.18}
              />
              <Path
                d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Path
                d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.973 31.973 0 01-1.472-7.658zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 001.471-7.658z"
                fill="#f9dca4"
                fillRule="evenodd"
              />
              <Path
                d="M19.113 25.706c-2.83-4.958-2.783-9.375-1.362-11.817 2.048-3.52 4.922-3.688 5.315-4.517 4.025-8.479 24.839-2.048 23.97 11.09a14.798 14.798 0 00-1.522-2.486s-.075 4.991-1.437 6.957c-1.64.464-15.061.239-20.053-9.948-4.006 2.268-5.06 7.015-4.91 10.72z"
                fill="#969696"
                fillRule="evenodd"
              />
              <Path
                d="M31.15 46.543c-2.66.022-15.617-4.022-12.61-26.045 0 0 .65 9.916 2.775 12.788 1.382 1.868 2.625 2.57 3.82.746 1.248-1.9 3.946-3.473 6.038-1.677 1.737-1.85 4.848-.212 6.084 1.677 1.195 1.823 2.44 1.123 3.822-.746 2.125-2.872 2.586-12.456 2.586-12.456 3.456 23.6-9.855 25.735-12.515 25.713z"
                fill="#969696"
                fillRule="evenodd"
              />
              <Path
                d="M26.527 36.802a7.118 7.118 0 014.568-2.096 7.29 7.29 0 014.503 2.099c-.788.525-5.874 1.737-9.071-.003z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Path
                d="M26.611 51.297a29.35 29.35 0 00-8.171-3.501c-4.778-.758-13.423-1.518-11.271-10.086C12.023 18.38 18.85 3.688 31.457 3.87c12.836.184 19.09 15.8 23.84 33.865 1.904 7.238-6.79 9.313-11.508 10.06A21.129 21.129 0 0036 51.14c-6.963 4.765-1.812 4.7-9.389.158zm4.851 1.198a14.292 14.292 0 0110.663-6.6c5.422-.86 14.562-4.28 8.565-9.72-10.765-9.764-6.167-22.032-19.638-22.032-12.615 0-8.748 12.268-19.513 22.032-5.997 5.44 3.143 8.86 8.564 9.72 1.97.313 8.017 1.127 11.36 6.6z"
                fill="#7d7062"
                fillRule="evenodd"
              />
              <Path
                d="M24.202 50.213s5.988 3.256 7.588 7.992c1.61-5.121 7.627-8.327 7.627-8.327S33.07 52.33 31.7 55.534c-.973-1.722-2.707-3.4-7.497-5.321z"
                fill="#302e33"
                fillRule="evenodd"
              />
            </G>
          </G>
        </Svg>
      </TouchableOpacity>
      {
        //Avatar8
      }
      <TouchableOpacity
        onPress={() => {
          setIndex(7);
        }}
      >
        <Svg viewBox="0 0 61.8 61.8" height={62} width={62}>
          <G data-name="Layer 2">
            <G data-name="\u2014\xCE\xD3\xC8 1">
              <Circle
                cx={30.9}
                cy={30.9}
                r={30.9}
                fill={
                  index === 7
                    ? "rgba(255,255,255,.1)"
                    : "rgba(255,255,255,0.06)"
                }
              />
              <Path
                fill="#f9dca4"
                fillRule="evenodd"
                d="M24.861 39.625l12.301.116V52.03l-12.301-.116V39.625z"
              />
              <Path
                d="M37.164 39.719v3.406a8.733 8.733 0 01-.039 1.166c-.053.415-1.314-.064-1.464.388-4.343 3.524-10.243-.74-10.8-3.383z"
                fillRule="evenodd"
                opacity={0.11}
              />
              <Path
                d="M30.935 10.85c20.245 0 12.355 33.549 0 33.549-11.67 0-20.245-33.548 0-33.548z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Path
                d="M18.815 25.834c-2.816 1.229-.422 7.05 1.35 7.024a29.337 29.337 0 01-1.35-7.024zM43.309 25.806c2.815 1.228.45 7.078-1.32 7.052a29.499 29.499 0 001.32-7.052z"
                fill="#f9dca4"
                fillRule="evenodd"
              />
              <Path
                d="M30.92 11.073c8.298 0 11.775 5.9 11.988 12.716.292 9.332-5.398 20.387-11.987 20.387-6.24 0-12.087-11.433-11.732-20.86.248-6.615 3.628-12.242 11.732-12.242z"
                fill="#ffe8be"
                fillRule="evenodd"
              />
              <Path
                d="M19.573 30.206s.217-8.582 7.93-8.908 9.343-4.454 9.343-4.454a30.732 30.732 0 006.492 8.99c5.806-10.92-4.97-16.378-4.97-16.378s.235-6.347-7.605-6.246-6.519 6.68-6.519 6.68-11.842 6.41-4.671 20.316z"
                fill="#969696"
                fillRule="evenodd"
              />
              <Path
                d="M52.797 52.701c-.484-1.122-1.787-3.851-2.822-4.5-4.398-2.756-8.086-3.155-12.813-5.3.238 10.814-12.055 10.672-12.302-.294-4.974 2.234-9.567 3.463-14.228 6.293-.948.576-1.508 2.475-1.915 3.508a30.896 30.896 0 0044.08.293z"
                fill="#434955"
                fillRule="evenodd"
              />
              <Path
                d="M24.846 42.614l6.229 8.308c-3.93 7.28-11.765 5.49-13.534-5.712 4.308-1.64 7.305-2.596 7.305-2.596z"
                fill="#fff"
                fillRule="evenodd"
              />
              <Path
                d="M20.793 26.956h8.818a.44.44 0 01.44.429 5.775 5.775 0 01.009.809h1.68a5.832 5.832 0 01.009-.81.44.44 0 01.44-.428h8.818a.44.44 0 01.44.44c0 .014.07 5.155-5.092 5.155-2.962 0-4.044-1.678-4.426-3.128H29.87c-.382 1.45-1.464 3.128-4.427 3.128-5.161 0-5.09-5.14-5.09-5.155a.44.44 0 01.439-.44z"
                fill="#e6e6e6"
                fillRule="evenodd"
              />
              <Path
                d="M37.188 42.614l-6.14 8.308c3.872 7.28 11.595 5.49 13.34-5.712-4.247-1.64-7.2-2.596-7.2-2.596z"
                fill="#fff"
                fillRule="evenodd"
              />
              <Path
                d="M20.793 26.956h8.818a.44.44 0 01.44.429 5.775 5.775 0 01.009.809h1.68a5.832 5.832 0 01.009-.81.44.44 0 01.44-.428h8.818a.44.44 0 01.44.44c0 .014.07 5.155-5.092 5.155-2.962 0-4.044-1.678-4.426-3.128H29.87c-.382 1.45-1.464 3.128-4.427 3.128-5.161 0-5.09-5.14-5.09-5.155a.44.44 0 01.439-.44zm19.747.88h-7.934a3.5 3.5 0 003.75 3.836 3.977 3.977 0 004.184-3.837zm-11.347 0H21.26a3.977 3.977 0 004.184 3.836 3.5 3.5 0 003.75-3.837z"
                fill="#434955"
                fillRule="evenodd"
              />
              <Circle cx={31.04} cy={55.668} r={0.839} fill="#e6e6e6" />
              <Circle cx={31.04} cy={58.787} r={0.839} fill="#e6e6e6" />
            </G>
          </G>
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
