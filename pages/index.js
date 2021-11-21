import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CSS Grids</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <article>
          <h2>Tenets of CSS Grids</h2>
          <ul>
            <li>All the cells in a column should have equal width. </li>
            <li>All the cells in a row should have equal height.</li>
            <li>Each column needs to have same number of rows (cells).</li>
            <li>Each row needs to have same number of columns (cells).</li>
          </ul>
          <figure data-valid-grid="true">
            <Image
              src="/grids/same-column-width.svg"
              width={400}
              height={400}
              alt="valid grid"
            />
            <figcaption>
              This is a valid grid where all the cells in the column are 250px
            </figcaption>
          </figure>
          <figure data-valid-grid="true">
            <Image
              src="/grids/same-row-height.svg"
              width={400}
              height={400}
              alt="valid grid"
            />
            <figcaption>
              This is a valid grid where all the cells in a row are equal height
              (even though all the rows are of different height)
            </figcaption>
          </figure>
          <figure data-valid-grid="false">
            <Image
              src="/grids/unequal-row-column.svg"
              width={400}
              height={400}
              alt="valid grid"
            />
            <figcaption>
              This in a invalid grid since the first row has 1 column and row 2
              has 2 columns.
            </figcaption>
          </figure>
          But you might say that I have seen these kind of layouts being drawn
          with css grids. Take the holy grail layout for example
          <figure>
            <Image
              src="/grids/holy-grail.svg"
              width={400}
              height={400}
              alt="valid grid"
            />
          </figure>
          <p>
            The reason we can achieve something like this, despite the
            contraints mentioned above, is because of how css grids function.
          </p>
          <p>
            css grid cells {"aren't"} boxes in the dom. instead, grid rows and
            columns are invisible markers which our dom elements can use to
            position themselves. css grid structure entirly exists in css.
          </p>
          <p>
            <strong>
              Rows and columns are like the lines painted on the ground in
              parking lots.
            </strong>{" "}
            Drivers can use these lines to align their vehicles, but really
            {"they're"} just symbols. {"It's"} up to the driver to decide how to
            use them.
          </p>
          <figure>
            <Image
              src="/grids/holy-grail-grid.svg"
              width={400}
              height={400}
              alt="valid grid"
            />
            <figcaption>Header and Footer span all the columns.</figcaption>
          </figure>
          <p>
            This grid passes all the contraints and this kind of layout is
            possible because dom elements can span across multiple cells.
          </p>
        </article>
      </main>
    </div>
  );
}
