import { Button, HStack, Text, VStack } from "@gluestack-ui/themed";
import Image from "next/image";
import React, { useContext } from "react";

const video = () => {
  const imageUrl =
    "https://res.cloudinary.com/dqzir1xkq/image/upload/v1705649117/samples/breakfast.jpg";

  const parts = imageUrl.split("upload/");

  let newUrl = "";
  let newUrl2 = "";
  let newUrl3 = "";
  let newUrl4 = "";

  if (parts.length === 2) {
    newUrl = parts[0] + "upload/" + "w_500/q_auto:low/" + parts[1];
    newUrl2 = parts[0] + "upload/" + "w_500/q_auto:best/" + parts[1];
    newUrl3 = parts[0] + "upload/" + "w_500/q_auto:good/" + parts[1];
    newUrl4 = parts[0] + "upload/" + "w_500/q_auto:eco/" + parts[1];
  }
  return (
    <HStack
      marginTop={20}
      display="flex"
      width={"$full"}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      <VStack alignItems="center" marginRight={10}>
        <Image
          src={newUrl}
          width={500}
          height={500}
          style={{ objectFit: "cover", borderRadius: 10 }}
          alt="Img"
        />
        <Text fontWeight="$bold" color="$white">
          q_auto:low (38 KB)
        </Text>
      </VStack>
      <VStack alignItems="center">
        <Image
          src={newUrl4}
          width={500}
          height={500}
          style={{ objectFit: "cover", borderRadius: 10 }}
          alt="Img"
        />
        <Text fontWeight="$bold" color="$white">
          q_auto:eco (40 KB)
        </Text>
      </VStack>

      <VStack alignItems="center" marginRight={10} marginTop={50}>
        <Image
          src={newUrl3}
          width={500}
          height={500}
          style={{ objectFit: "cover", borderRadius: 10 }}
          alt="Img"
        />
        <Text fontWeight="$bold" color="$white">
          q_auto:good (42 KB)
        </Text>
      </VStack>
      <VStack alignItems="center" marginTop={50}>
        {" "}
        <Image
          src={newUrl2}
          width={500}
          height={500}
          style={{ objectFit: "cover", borderRadius: 10 }}
          alt="Img"
        />
        <Text fontWeight="$bold" color="$white">
          q_auto:best (50 KB)
        </Text>
      </VStack>
    </HStack>
  );
};

export default video;
