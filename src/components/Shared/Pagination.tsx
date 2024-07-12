import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type TPaginationProps = {
  page: number;
  pages: number[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ page, pages, setPage }: TPaginationProps) => {
  return (
    <div className="flex justify-center gap-2 my-12">
      {page !== 0 && (
        <div className="flex flex-row-reverse items-center">
          <button
            onClick={() => setPage(page - 1)}
            className="text-2xl font-semibold text-[#878787] mr-4"
          >
            Prev
          </button>

          <IoIosArrowBack className="text-2xl font-semibold text-[#878787]" />
        </div>
      )}

      {pages?.map((item, index) => (
        <button
          key={index}
          onClick={() => setPage(index)}
          className={`w-10 py-0 font-semibold ${
            page == index
              ? "text-2xl font-bold border-b-4 border-primary	"
              : "text-xl text-[#878787] "
          }`}
        >
          {`${index + 1 <= 9 ? "0" : ""}${index + 1}`}
        </button>
      ))}

      {page !== pages?.length - 1 && (
        <div className="flex items-center">
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            className="text-2xl font-semibold text-[#878787] ml-4"
          >
            Next
          </button>
          <IoIosArrowForward className="text-2xl font-semibold text-[#878787]" />
        </div>
      )}
    </div>
  );
};

export default Pagination;
