import { useEffect, useState } from "react";
import type { paths } from "../types/grocy";
import styles from "./Dashboard.module.css";
import { data } from "react-router";

type SystemInfoResponse =
  paths["/system/info"]["get"]["responses"]["200"]["content"]["application/json"];

type StockVolatileResponse =
  paths["/stock/volatile"]["get"]["responses"]["200"]["content"]["application/json"];

function Dashboard() {
  const API_PATH = "/api/grocy";
  const dueSoonDays = 7;

  const [systemInfo, setSystemInfo] = useState<SystemInfoResponse | null>(null);
  const [dueProducts, setDueProducts] = useState<
    StockVolatileResponse["due_products"] | null
  >(null);
  const [expiredProducts, setExpiredProducts] = useState<
    StockVolatileResponse["expired_products"] | null
  >(null);
  const [missingProducts, setMissingProducts] = useState<
    StockVolatileResponse["missing_products"] | null
  >(null);
  const [overdueProducts, setOverdueProducts] = useState<
    StockVolatileResponse["overdue_products"] | null
  >(null);

  useEffect(() => {
    fetch(`${API_PATH}/system/info?due_soon_days=${dueSoonDays}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setSystemInfo(data))
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  useEffect(() => {
    fetch(`${API_PATH}/stock/volatile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(
        ({
          due_products,
          expired_products,
          missing_products,
          overdue_products,
        }: StockVolatileResponse) => {
          setDueProducts(due_products ?? []);
          setExpiredProducts(expired_products ?? []);
          setMissingProducts(missing_products ?? []);
          setOverdueProducts(overdue_products ?? []);
        },
      )
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.panel}>
          <ul>
            {expiredProducts?.map((element) => {
              return <li>test</li>;
            })}
          </ul>
        </div>
        {systemInfo ? (
          <div>
            <p>
              Wersja Grocy:{" "}
              <strong>{systemInfo?.grocy_version?.Version}</strong>
            </p>
            <p>
              Wersja PHP: <strong>{systemInfo.php_version}</strong>
            </p>
            <p style={{ color: "green" }}>Połączenie udane!</p>
          </div>
        ) : (
          <p>Ładowanie danych...</p>
        )}
      </div>
    </>
  );
}

export default Dashboard;
