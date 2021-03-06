import { useEffect, useRef, useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import searchResults from "../api/searchResults.json";
import { SearchResult } from "./SearchResult";

function filterResults(search, results) {
  return results.filter(({ problem }) =>
    problem.toLowerCase().includes(search.toLowerCase())
  );
}

export function Home() {
  const [searchInput, setSearchInput] = useState("");
  const focusElement = useRef();

  const handleChange = (newInput) => {
    setSearchInput(newInput.currentTarget.value);
  };

  useEffect(() => {
    if (focusElement.current) focusElement.current.focus();
  }, [focusElement]);

  return (
    <>
      <h1 className="h2-blue" style={{ paddingTop: "16px" }}>
        Wh@t <span className="h2-black">the</span> What!
      </h1>

      <main style={{ padding: "16px 24px 0" }}>
        <InputGroup>
          <Input
            variant="flushed"
            placeholder="Search your question..."
            focusBorderColor="#4200FF"
            value={searchInput}
            onChange={handleChange}
            ref={focusElement}
            style={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "16px",
            }}
          />
          <InputRightElement children={<SearchIcon color="#B3B7C5" />} />
        </InputGroup>
        <section style={{ textAlign: "initial" }}>
          <h2 className="h3" style={{ paddingTop: "24px" }}>
            Un-answered questions (
            {
              filterResults(searchInput, searchResults.unansweredQuestions)
                .length
            }
            )
          </h2>

          {filterResults(searchInput, searchResults.unansweredQuestions).map(
            ({ problem, tags }, index) => (
              <SearchResult key={index} problem={problem} tags={tags} />
            )
          )}
        </section>

        <hr
          style={{
            height: "1px",
            backgroundColor: "#E3E5EB",
            width: "100%",
            marginTop: "26px",
          }}
        />

        {/* Latest Answered Questions */}
        <section style={{ textAlign: "initial", paddingTop: "26px" }}>
          <h2 className="h3">
            Latest answered questions (
            {
              filterResults(searchInput, searchResults.latestAnsweredQuestions)
                .length
            }
            )
          </h2>

          {filterResults(
            searchInput,
            searchResults.latestAnsweredQuestions
          ).map(({ problem, tags, answer }, index) => (
            <SearchResult
              key={index}
              problem={problem}
              tags={tags}
              answer={answer}
            />
          ))}
        </section>
      </main>

      {searchInput.length > 0 ? (
        <footer
          style={{
            backgroundColor: "#EDE6FF",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 16px",
            margin: "24px 24px 4rem",
          }}
        >
          <p className="p-regular" style={{ fontSize: "12px" }}>
            Not the question you were looking for?
          </p>
          <Button
            colorScheme="purple"
            variant="link"
            size="sm"
            style={{ cursor: "pointer", fontSize: "12px" }}
          >
            Ask New Question
          </Button>
        </footer>
      ) : (
        <footer style={{ marginTop: "24px", backgroundColor: "#EDE6FF" }}>
          <img src="" alt="" />
          <p>100 questions | 200 answers | You answered 3 questions</p>
        </footer>
      )}

      <hr />
    </>
  );
}
