import { HStack, Text, VStack } from "@gluestack-ui/themed";
import Image from "next/image";
import React from "react";

const video2 = () => {
  const originalUrl =
    "https://res.cloudinary.com/dqzir1xkq/image/upload/v1705649117/samples/breakfast.jpg";
  const parts = originalUrl.split("upload/");

  let reducedQualityImageUrl = "";

  if (parts.length === 2) {
    reducedQualityImageUrl = parts[0] + "upload/q_10/" + parts[1];
  }

  return (
    <HStack
      marginTop={80}
      display="flex"
      width={"$full"}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      <VStack alignItems="center" marginRight={10}>
        <Image
          src={originalUrl}
          width={500}
          height={500}
          style={{ objectFit: "cover", borderRadius: 10 }}
          alt="Img"
        />
        <Text fontWeight="$bold" color="$white">
          Original image
        </Text>
      </VStack>
      <VStack alignItems="center">
        <Image
          src={reducedQualityImageUrl}
          width={500}
          height={500}
          style={{ objectFit: "cover", borderRadius: 10 }}
          alt="Img"
        />
        <Text fontWeight="$bold" color="$white">
          q_10
        </Text>
      </VStack>
    </HStack>
  );
};

export default video2;
