// { "id": "id-1", "label": ".docx", "percentage": 22 }

type StatisticsProps = {
  title?: string;
  stats: { id: string; label: string; percentage: number }[];
};

const Statistics = ({ title, stats }: StatisticsProps) => {
  return (
    <section
    // className={statistics}
    >
      <h2
      //   className={title}
      >
        {title && title}
      </h2>

      <ul
      //   className={stat-list}
      >
        <li
        // className={item}
        >
          <span
          //   className={label}
          >
            .docx
          </span>
          <span
          //   className={percentage}
          >
            4%
          </span>
        </li>
        <li
        // className={item}
        >
          <span
          //   className={label}
          >
            .mp3
          </span>
          <span
          //   className={percentage}
          >
            14%
          </span>
        </li>
        <li
        // className={item}
        >
          <span
          //   className={label}
          >
            .pdf
          </span>
          <span
          //   className={percentage}
          >
            41%
          </span>
        </li>
        <li
        // className={item}
        >
          <span
          //   className={label}
          >
            .mp4
          </span>
          <span
          //   className={percentage}
          >
            12%
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
