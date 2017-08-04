import model from '../models';

const Book = model.Book;

/**
 * @class bookClass
 * @classdesc Book Class
 */
class bookClass {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @return {void} 
   */
  static create(req, res) {
    const title = req.body.title || '';
    const description = req.body.description || '';
    const author = req.body.author || '';
    const publishedDate = req.body.published_date || '';
    const bookURL = req.body.book_url || '';
    const ISBN = req.body.isbn || '';
    const bookCategoryId = req.body.book_category || '';
    const coverPhotoId = req.body.cover_photo || '';
    const documentPath = req.body.document_path || '';
    const userId = req.decoded.user;

    Book.create(
      {
        title,
        description,
        author,
        publishedDate,
        bookURL,
        ISBN,
        bookCategoryId,
        coverPhotoId,
        documentPath,
        userId
      },
      {
        fields: ['title', 'description', 'author', 'userId']
      })
      .then(() => res.status(201).send({
        message: 'Book added successfully',
        status: 'Created',
        code: 201
      }))
      .catch(error => res.status(400).send({
        message: error.message,
        status: 'Bad Request',
        code: 400
      }))
      .catch(error => res.status(500).send({
        message: error.message,
        status: 'Internal Server Error',
        code: 500
      }));
  }
  /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {void} 
     */
  static edit(req, res) {
    const title = req.body.title || '';
    const description = req.body.description || '';
    const author = req.body.author || '';
    const publishedDate = req.body.published_date || '';
    const bookURL = req.body.book_url || '';
    const ISBN = req.body.isbn || '';
    const bookCategoryId = req.body.book_category || 0;
    const coverPhotoId = req.body.cover_photo || 0;
    const documentPath = req.body.document_path || '';
    const id = req.body.book_id;

    Book.findOne({ where: { id } })
      .then((book) => {
        if (book) {
          Book.update(
            {
              title,
              description,
              author,
              publishedDate,
              bookURL,
              ISBN,
              bookCategoryId,
              coverPhotoId,
              documentPath
            },
            {
              where: { id }
            }).then(() => {
            res.status(200)
              .send({ message: 'Book successfully updated', status: 'OK', code: 200 });
          }).catch(error => res.status(400)
            .send({
              message: error.message,
              status: 'Bad Request',
              code: 400
            }));
        } else {
          res.status(400).send({ message: 'Book not found', status: 'Not Found', code: 404 });
        }
      })
      .catch(error => res.status(500).send({
        message: error.message,
        status: 'Internal Server Error',
        code: 500
      }));
  }
  /**
   * 
   * @method get
   * @param {object} req 
   * @param {object} res 
   * @return {object} response
   */
  static get(req, res) {
    Book.findAll()
      .then((books) => {
        if (books) {
          res.status(200).send({ message: books, status: 'OK', code: 200 });
        } else {
          res.status(400).send({ message: 'No record available', status: 'No Content', code: 204 });
        }
      })
      .catch(error => res.status(500).send({
        message: error.message,
        status: 'Internal Server Error',
        code: 500
      }));
  }
}


export default bookClass;
