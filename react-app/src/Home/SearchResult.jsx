import { Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export function SearchResult({ problem, tags, answer = null }) {
  return (
    <>
      <p className="p-bold" style={{ padding: "16px 0 4px" }}>
        {problem}
      </p>

      {answer ? (
        <p
          className="p-regular"
          style={{ color: "hsla(0, 0%, 0%, 0.7)", paddingBottom: "4px" }}
          dangerouslySetInnerHTML={{ __html: answer }}
        ></p>
      ) : null}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          {tags.map((tag) => (
            <span key={tag} className="span-tag">
              {tag}
            </span>
          ))}
        </div>

        <Button
          colorScheme="purple"
          variant="link"
          rightIcon={<ChevronRightIcon />}
          size="sm"
          style={{ cursor: "pointer" }}
        >
          Add answer
        </Button>
      </div>
    </>
  );
}
