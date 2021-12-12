import React, { useEffect, useState } from "react";
import { Table } from "../../../../components/Table";
import { Pagination } from "../../../../components/Pagination";
import { listUsers } from "../../services/userService";

const UserContainer = () => {
  const fields = [
    { name: "Avatar" },
    { name: "Nombre" },
    { name: "Apellido" },
    { name: "Email", mobileHide: true },
  ];

  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();

  useEffect(() => {
    listUsers(page).then(({ data }) => {
      setTotalPages(data.total_pages);
      setUsers(data.data);
      setTotal(data.total);
    });
  }, [page]);

  const navigatePage = (page) => {
    setPage(page);
  };

  const previosPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };
  return (
    <section>
      <div className="title-container-user">
        <h1>Usuarios</h1>
        <h5>Total: {total}</h5>
      </div>
      <Table data={users} fields={fields} />
      <Pagination
        previosPage={previosPage}
        nextPage={nextPage}
        navigatePage={navigatePage}
        totalPages={totalPages}
        page={page}
        variant={"secondary"}
      />
    </section>
  );
};

export { UserContainer };
