const IMG_PATH = "/is-grid-valid";

const questions = [
  {
    src: `${IMG_PATH}/child-normal.svg`,
    isValid: true,
    answer: `This grid defines 2 columns and 2 rows, and a single child decides to occupy the top-right cell. Totally valid.`,
  },
  {
    src: `${IMG_PATH}/diagonal.svg`,
    isValid: false,
    answer: `Grid lines aren't allowed to be diagonal. With transforms, we can rotate an entire grid, but we can't rotate individual rows or columns.`,
  },
  {
    src: `${IMG_PATH}/child-span-column.svg`,
    isValid: true,
    answer: `This child has been assigned to sit in the first column, and to span across the first two rows. Nothing wrong with that 👍🏻`,
  },
  {
    src: `${IMG_PATH}/partially-filling-cell.svg`,
    isValid: true,
    answer: `By default, a child will expand to fill its available cell, but this can be overridden in a number of ways. There is no rule that says a grid child must be the same size as the cell it's aligned with.`,
  },
  {
    src: `${IMG_PATH}/double-in-cell.svg`,
    isValid: true,
    answer: `While not super common, grid children can be assigned to the same cell.`,
  },
  {
    src: `${IMG_PATH}/overlap-span.svg`,
    isValid: true,
    answer: `In this example, our first element is assigned to fill the second and third rows of the first column, and the second child fills the entire third row. Grid children are allowed to overlap, no problem at all.`,
  },
  {
    src: `${IMG_PATH}/l-area.svg`,
    isValid: false,
    answer: `Our grid lines aren't allowed to turn like this — for this grid to be valid, the second column would need to extend from the top to the bottom, producing a typical 2x3 grid`,
  },
  {
    src: `${IMG_PATH}/filled-grid.svg`,
    isValid: true,
    answer: `This busy grid has a lot going on, but everything is totally valid: the grid structure is immaculate, and each child uses that structure correctly.`,
  },
  {
    src: `${IMG_PATH}/tetronimo.svg`,
    isValid: false,
    answer: `A grid child can choose to span multiple rows and columns, but it must always produce a rectangle. No tetronimoes allowed!`,
  },
  {
    src: `${IMG_PATH}/centered-overflow.svg`,
    isValid: true,
    answer: `This one looks a bit funky, but there are two ways this could happen: Either a slightly-too-small child is spanning across the entire row, or a slightly-too-large child is assigned to the center column. Either way, totally valid.`,
  },
  {
    src: `${IMG_PATH}/dead-space.svg`,
    isValid: true,
    answer: `This can happen if our rows and columns are given specific, fixed sizes, and are placed in a container that has extra space left over.`,
  },
];

export default questions;
