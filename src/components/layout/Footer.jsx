import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-neutral-200 text-center dark:bg-gray-700 lg:text-left">
      <div class="p-4 text-center text--700 dark:text-neutral-200">
        © ${year} Copyright:
        <a
          class="text-neutral-800 dark:text-neutral-200"
          href="https://github.com/blockDeepanshu"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
