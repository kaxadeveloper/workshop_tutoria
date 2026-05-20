import {
    DollarCircleFilled,
    FieldTimeOutlined,
    ReloadOutlined,
    PlayCircleOutlined,
    PauseCircleOutlined,
  } from "@ant-design/icons";
  
  import {
    Button,
    Card,
    Col,
    Divider,
    Progress,
    Row,
    Space,
    Statistic,
    Typography,
  } from "antd";
  
  import { useEffect, useRef, useState } from "react";
  
  const { Countdown } = Statistic;
  const { Title, Text } = Typography;
  
  function DynamicCountdown({
    title,
    duration,
    icon,
    color,
    prefix,
    suffix,
  }) {
    const [targetTime, setTargetTime] = useState(Date.now() + duration);
    const [remaining, setRemaining] = useState(duration);
    const [isRunning, setIsRunning] = useState(true);
  
    const intervalRef = useRef(null);
  
    // Start timer tracking
    useEffect(() => {
      if (isRunning) {
        intervalRef.current = setInterval(() => {
          setRemaining(targetTime - Date.now());
        }, 100);
  
        return () => clearInterval(intervalRef.current);
      }
    }, [isRunning, targetTime]);
  
    // Restart Timer
    const restartTimer = () => {
      const newTime = Date.now() + duration;
      setTargetTime(newTime);
      setRemaining(duration);
      setIsRunning(true);
    };
  
    // Pause / Resume
    const toggleTimer = () => {
      if (isRunning) {
        clearInterval(intervalRef.current);
        setRemaining(targetTime - Date.now());
      } else {
        setTargetTime(Date.now() + remaining);
      }
  
      setIsRunning(!isRunning);
    };
  
    // Progress %
    const percent = Math.max(
      0,
      Math.min(100, ((duration - remaining) / duration) * 100)
    );
  
    return (
      <Card
        hoverable
        style={{
          borderRadius: 16,
          marginBottom: 24,
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Title level={4} style={{ color }}>
            {icon} {title}
          </Title>
  
          <Countdown
            value={targetTime}
            valueStyle={{
              color,
              fontSize: 42,
              fontWeight: "bold",
            }}
            format="HH:mm:ss"
            prefix={prefix}
            suffix={suffix}
            onFinish={() => {
              setIsRunning(false);
            }}
          />
  
          <Progress
            percent={Number(percent.toFixed(1))}
            status={remaining <= 0 ? "success" : "active"}
          />
  
          <Row justify="space-between" align="middle">
            <Col>
              <Text strong>
                Remaining: {Math.max(0, Math.ceil(remaining / 1000))}s
              </Text>
            </Col>
  
            <Col>
              <Space>
                <Button
                  type="primary"
                  icon={
                    isRunning ? (
                      <PauseCircleOutlined />
                    ) : (
                      <PlayCircleOutlined />
                    )
                  }
                  onClick={toggleTimer}
                >
                  {isRunning ? "Pause" : "Resume"}
                </Button>
  
                <Button
                  icon={<ReloadOutlined />}
                  onClick={restartTimer}
                >
                  Restart
                </Button>
              </Space>
            </Col>
          </Row>
        </Space>
      </Card>
    );
  }
  
  export default function CountdownTimerTab() {
    return (
      <div
        style={{
          padding: 20,
          minHeight: "100vh",
          background: "#f5f5f5",
        }}
      >
        <Title level={2}>Interactive Countdown Timers</Title>
  
        {/* Basic Timer */}
        <DynamicCountdown
          title="Event Countdown"
          duration={10000}
          icon={<FieldTimeOutlined />}
          color="red"
          prefix="Ends In"
          suffix="⏰"
        />
  
        <Divider />
  
        {/* Sale Timer */}
        <DynamicCountdown
          title="Mega Sale"
          duration={120000}
          icon={<DollarCircleFilled style={{ color: "gold" }} />}
          color="green"
          prefix="Sale Ends In"
          suffix="🔥 Hurry Up!"
        />
  
        <Divider />
  
        {/* Long Timer */}
        <DynamicCountdown
          title="Limited Offer"
          duration={300000}
          icon={<FieldTimeOutlined />}
          color="purple"
          prefix="Offer Ends In"
          suffix="🎁"
        />
      </div>
    );
  }