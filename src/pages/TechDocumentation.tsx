import { techDocumentationUrls } from "../lib/constants/urls"
import { techDocuenationContent } from "../lib/constants/data"


const TechDocumentation = () => {
  return (
    <section className="bg-stone-100 flex relative min-h-dvh">
      {/* side bar */}
      <div className=" fixed w-[302px] left-0 top-0  h-full  border-r border-r-gray-700">
        <div className=" py-2.5 px-[30px] border-b border-gray-700">
          <header className=" text-[28.8px] leading-[43.3px]">
            JS Documentation
          </header>
        </div>
        <div>
          <ul>
            {techDocumentationUrls.map((item, index) => (
              <li
                key={index}
                className={`leading-6 px-[30px] py-2.5 ${
                  index !== techDocumentationUrls.length - 1
                    ? "border-b border-gray-700"
                    : ""
                }`}
              >
                <a href={`#${item.href}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* main content */}
      <aside className=" ml-[302px]  grow pt-5 h-full px-7 space-y-3 text-gray-700">
        {techDocuenationContent.map((item, index) => (
          <section className="" key={index}>
            <h2
              id={item.href}
              className=" text-[28.8px] text-black leading-[43.2px]"
            >
              {item.headers}
            </h2>
            <div className=" space-y-3 mb-3">
              {item.paragraphs?.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </div>
            <ul className=" list-inside space-y-4 list-disc">
              {item.lists?.map((content, index) => (
                <li className=" text-gray-600 text-[15.38px]" key={index}>
                  {content}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </aside>
    </section>
  );
}

export default TechDocumentation