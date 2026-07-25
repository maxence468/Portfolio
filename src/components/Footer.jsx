export default function Footer() {
  return (
    <footer>
      <div className="z-40 border-t border-border p-5 flex flex-col justify-items-center items-center inset-x-0 bottom-0 absolute bg-background">
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p> Lyon, France</p>
        </div>

        <p>
          maxencebarth12@gmail.com |{" "}
          <a
            href="https://www.linkedin.com/in/maxence-barthelemy-bb624a374/"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/maxence468" target="_blank">
            GitHub
          </a>
        </p>
        <hr />
        <p>Maxence BARTHELEMY</p>
      </div>
    </footer>
  );
}
