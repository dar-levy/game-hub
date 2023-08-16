import React, { useState } from "react";
import { Button, Text, Textarea } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, limit);

  return (
    <Text>
      {summary}...<Button>{expanded ? "Show Less" : "Read More"}</Button>
    </Text>
  );
};

export default ExpandableText;
